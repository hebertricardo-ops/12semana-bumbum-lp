import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../components/Icon';
import { HERO } from '../content';

const EASE = [0.16, 1, 0.3, 1];

export function Hero({ onCta }) {
  const reduce = useReducedMotion();

  // A entrada acontece uma vez, no load. Sem viewport: a hero ja esta visivel.
  const enter = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section
      id="topo"
      className="relative overflow-hidden"
      style={{ '--phase': 'var(--color-phase-1)' }}
    >
      {/* Campo quente atras do mockup: da volume ao fundo transparente da imagem. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 55% at 78% 30%, rgba(194,85,63,0.09), transparent 70%), radial-gradient(60% 50% at 8% 12%, rgba(125,143,110,0.12), transparent 68%)',
        }}
      />

      <div className="wrap relative pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
        {/* Mockup primeiro no DOM: aparece antes do botao "Quero começar
            hoje" em toda largura de tela, nao so no empilhamento mobile.
            Estatico, sem tilt de mouse nem entrada animada. */}
        <div className="max-w-3xl mx-auto text-center gap-9">
          {/* ---------- COPY ---------- */}
          <div className="text-center">
            <motion.p
              {...enter(0)}
              className="label mb-4 mx-auto inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-[var(--color-paper)] px-3.5 py-2 justify-center"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--color-phase-1)' }}
              />
              Método T.E.P. · 12 semanas
            </motion.p>

            {/* A headline e longa por decisao comercial (e a promessa inteira).
                A escala foi planejada junto com o mockup para caber em 3 linhas
                no desktop e nao empurrar o CTA para fora da primeira dobra. */}
            <motion.h1
              {...enter(0.06)}
              className="display-xl max-w-[19ch] text-balance mx-auto"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 3.35rem)' }}
            >
              12 Planilhas para Crescer o Bumbum Treinando em Casa para{' '}
              <em style={{ color: 'var(--color-brand)' }}>Mulheres 30+</em>
            </motion.h1>

            <motion.p {...enter(0.14)} className="lede mt-5 mx-auto text-center max-w-[58ch]">
              {HERO.lede}
            </motion.p>

            {/* Mockup abaixo da sub-headline */}
            <motion.div {...enter(0.18)} className="relative mx-auto max-w-[480px] lg:max-w-[420px] mt-8">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/img/hero-640.avif 640w, /img/hero-960.avif 960w, /img/hero-1280.avif 1280w"
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
                <source
                  type="image/webp"
                  srcSet="/img/hero-640.webp 640w, /img/hero-960.webp 960w, /img/hero-1280.webp 1280w"
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
                <img
                  src="/img/hero-960.webp"
                  width={899}
                  height={783}
                  alt="As 12 planilhas abertas no celular: a página da Semana 1, a tabela de exercícios com séries e repetições, e o vídeo de execução."
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full"
                  style={{ filter: 'drop-shadow(0 22px 40px rgba(60,44,30,0.18))' }}
                />
              </picture>
            </motion.div>

            
            <motion.ul
              {...enter(0.26)}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-[var(--color-line)] pt-5 justify-center"
            >
              {HERO.specs.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-[0.95rem] text-[var(--color-ink-soft)]"
                >
                  <Icon
                    name="check"
                    size={17}
                    className="shrink-0"
                    // O check herda a cor da fase 1: a pagina comeca em salvia.
                  />
                  {s}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* ---------- ARGUMENTO DE ABERTURA ---------- */}
        <motion.div
          {...enter(0.34)}
          className="mt-12 border-t border-[var(--color-line)] pt-7 lg:mt-16 max-sm:text-center"
        >
          <p className="prose-body max-w-[58ch] text-[1.09rem] max-sm:mx-auto">
            Toda planilha de glúteo começa pelo agachamento. Nosso método começa pela{' '}
            <strong>ativação</strong>, porque se o seu glúteo está desligado, cada
            agachamento está construindo perna, não bumbum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
