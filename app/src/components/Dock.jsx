import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { OFFER } from '../content';

/* Barra de acao fixa no rodape.
   Regra: so aparece depois que a leitora passou da hero, e some quando uma
   secao de preco esta na tela (o CTA real ja esta visivel ali).
   IntersectionObserver, nunca listener de scroll. */
export function Dock({ onCta }) {
  const [show, setShow] = useState(false);
  const passouHero = useRef(false);
  const precoVisivel = useRef(false);

  useEffect(() => {
    const sync = () => setShow(passouHero.current && !precoVisivel.current);

    const hero = document.getElementById('topo');
    const precos = Array.from(document.querySelectorAll('[data-preco]'));

    const obsHero = new IntersectionObserver(
      ([e]) => {
        passouHero.current = !e.isIntersecting && e.boundingClientRect.top < 0;
        sync();
      },
      { threshold: 0, rootMargin: '-120px 0px 0px 0px' },
    );

    const obsPreco = new IntersectionObserver(
      (entries) => {
        // Qualquer bloco de preco na tela desliga a barra.
        const algumVisivel = entries.some((e) => e.isIntersecting);
        if (algumVisivel) precoVisivel.current = true;
        else precoVisivel.current = precos.some((el) => {
          const r = el.getBoundingClientRect();
          return r.top < window.innerHeight && r.bottom > 0;
        });
        sync();
      },
      { threshold: 0.12 },
    );

    if (hero) obsHero.observe(hero);
    precos.forEach((el) => obsPreco.observe(el));

    return () => {
      obsHero.disconnect();
      obsPreco.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          exit={{ y: '110%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div
            className="border-t border-[var(--color-line)]"
            style={{
              background: 'color-mix(in srgb, var(--color-paper) 88%, transparent)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
            }}
          >
            <div className="wrap flex items-center justify-between gap-4 py-3">
              <p className="min-w-0 leading-tight">
                <b className="block text-[0.98rem]">Plano {OFFER.completo.nome}</b>
                <span className="num text-[0.9rem] text-[var(--color-ink-mute)]">
                  R${OFFER.completo.preco} · garantia de {OFFER.garantiaDias} dias
                </span>
              </p>
              <button
                type="button"
                onClick={() => onCta(OFFER.completo.plano)}
                className="btn btn-primary shrink-0 px-6 text-[1rem]"
                style={{ minHeight: 50 }}
              >
                Quero agora
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Barra de progresso de leitura: orienta numa pagina de rolagem longa. */
export function ProgressBar() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
      style={{ scaleX: width, background: 'var(--color-brand)' }}
    />
  );
}
