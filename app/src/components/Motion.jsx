import { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useScroll,
} from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];

/* Ponteiro fino (mouse/trackpad). Todo efeito de cursor fica atras deste teste,
   para nao gastar frame nenhum no celular, que e de onde vem quase todo acesso. */
export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setFine(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return fine;
}

/* Revelacao na entrada em viewport. Hierarquia: o conteudo chega na ordem
   em que deve ser lido, em vez de tudo de uma vez.
   Fallback: se o IntersectionObserver nao disparar em 1.2s, forca visivel. */
export function Reveal({ children, delay = 0, y = 22, className, as = 'div' }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  const [forced, setForced] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (reduce) return;
    const timer = setTimeout(() => setForced(true), 1200);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <Tag
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={forced ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* Sequencia em cascata: o pai orquestra, os filhos herdam o stagger. */
export function RevealGroup({ children, className, stagger = 0.07, as = 'div' }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, y = 20, as = 'div' }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </Tag>
  );
}

/* Spotlight: um halo quente segue o cursor dentro do card. Comunica qual card
   esta sob o ponteiro sem mover o layout. Desliga em toque. */
export function Spotlight({ children, className = '', radius = 320, strength = 0.1 }) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const [on, setOn] = useState(false);

  const onMove = useCallback(
    (e) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    },
    [x, y],
  );

  // Hook incondicional: o gradiente e derivado sempre, so a renderizacao
  // do halo e que depende do ponteiro ser fino.
  const glow = useTransform(
    [x, y],
    ([cx, cy]) =>
      `radial-gradient(${radius}px circle at ${cx}px ${cy}px, rgba(194,85,63,${strength}), transparent 68%)`,
  );

  const active = fine && !reduce;

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onPointerMove={active ? onMove : undefined}
      onPointerEnter={active ? () => setOn(true) : undefined}
      onPointerLeave={active ? () => setOn(false) : undefined}
    >
      {active && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ borderRadius: 'inherit', background: glow }}
          animate={{ opacity: on ? 1 : 0 }}
          transition={{ duration: 0.32, ease: EASE }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* Botao magnetico: o alvo se aproxima do cursor. Feedback de que o CTA e o
   elemento vivo da secao. Nunca no celular, onde nao existe hover. */
export function Magnetic({ children, className = '', pull = 0.28, radius = 90 }) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();

  const spring = { stiffness: 260, damping: 20, mass: 0.35 };
  const mx = useSpring(0, spring);
  const my = useSpring(0, spring);

  const active = fine && !reduce;

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const dist = Math.hypot(dx, dy);
    const falloff = Math.max(0, 1 - dist / (radius + r.width / 2));
    mx.set(dx * pull * falloff);
    my.set(dy * pull * falloff);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onPointerMove={active ? onMove : undefined}
      onPointerLeave={active ? reset : undefined}
      style={active ? { x: mx, y: my } : undefined}
    >
      {children}
    </motion.div>
  );
}

/* Elevacao no hover, com a sombra tingida no tom do papel. */
export function LiftCard({ children, className = '', lift = -5, ...rest }) {
  const reduce = useReducedMotion();
  const fine = useFinePointer();

  return (
    <motion.div
      className={className}
      whileHover={fine && !reduce ? { y: lift, boxShadow: 'var(--shadow-lift)' } : undefined}
      transition={{ duration: 0.4, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* Parallax vertical leve na foto dentro do seu proprio container mascarado.
   Profundidade de camada sem sequestrar o scroll. */
export function ParallaxImage({ children, className = '', amount = 26 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-full w-full"
        style={reduce ? undefined : { y, scale: 1.09 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
