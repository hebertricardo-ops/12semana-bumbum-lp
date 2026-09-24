import { Reveal, RevealGroup, RevealItem, Spotlight, LiftCard, ParallaxImage } from '../components/Motion';
import { Photo } from '../components/Photo';
import { TEP, FASES, PASSOS, OBJECOES } from '../content';

/* ---------- 5 · MECANISMO T.E.P. ----------
   Faixa escura arredondada: a emenda com as faixas claras vizinhas fica
   costurada pelo canto grande, em vez de uma quebra dura de cor. */
export function Method() {
  return (
    <section
      id="metodo"
      className="px-[clamp(0.5rem,2.5vw,1.25rem)] py-2"
      style={{ '--phase': 'var(--color-phase-2)' }}
    >
      <div className="on-dark band-round band">
        <div className="wrap">
          <Reveal>
            <h2 className="display-lg max-w-[20ch] text-balance max-sm:mx-auto max-sm:text-center mx-auto text-center">Por que isso funciona quando <span style={{ color: 'var(--color-brand)' }}>nada funcionou</span>:{' '}
              <em style={{ color: 'var(--color-phase-2)' }}>o Método T.E.P.</em>
            </h2>
          </Reveal>

          <div className="mt-7 grid gap-5 md:grid-cols-2 md:gap-9">
            <Reveal>
              <p className="prose-body max-sm:mx-auto max-sm:text-center">
                Existe uma razão técnica para o seu glúteo não responder, e ela não tem a
                ver com esforço. Tem a ver com <strong>ordem</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="prose-body max-sm:mx-auto max-sm:text-center">
                Treino solto não é programa. Sem sequência e sem progressão registrada, o
                corpo não tem motivo para mudar, e o estímulo se espalha para onde já era
                forte.
              </p>
            </Reveal>
          </div>

          {/* --- As tres letras: conteudo centralizado no cartao, a pedido --- */}
          <RevealGroup as="ol" className="mt-10 grid gap-4 md:grid-cols-3">
            {TEP.map((t) => (
              <RevealItem as="li" key={t.letra}>
                <Spotlight className="card h-full" strength={0.14}>
                  <div className="flex h-full flex-col items-center p-6 text-center">
                    <span
                      className="display text-[3.2rem] leading-none"
                      style={{ color: 'var(--color-phase-2)' }}
                      aria-hidden="true"
                    >
                      {t.letra}
                    </span>
                    <h3 className="display-md mt-3">{t.nome}</h3>
                    <p className="prose-body mt-2 text-[1rem]">{t.texto}</p>
                  </div>
                </Spotlight>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.05}>
            <p className="prose-body mt-10 border-t border-[rgba(250,246,240,0.16)] pt-7 text-[1.09rem] max-sm:mx-auto max-sm:text-center">
              Esses três princípios se distribuem em <strong>4 fases de 3 semanas</strong>.
              Cada fase prepara a seguinte, e é por isso que são 12 planilhas e não 12
              treinos soltos.
            </p>
          </Reveal>

          {/* --- Termometro de fase: a cor esquenta ao longo do programa --- */}
          <RevealGroup as="ol" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FASES.map((f) => (
              <RevealItem as="li" key={f.n}>
                <LiftCard className="h-full">
                  <article className="card flex h-full flex-col overflow-hidden">
                    <ParallaxImage
                      className="aspect-[4/5] rounded-t-[var(--radius-lg)]"
                      amount={18}
                    >
                      <Photo
                        name={f.img}
                        widths={[480, 768]}
                        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 88vw"
                        width={480}
                        height={600}
                        alt={f.alt}
                      />
                    </ParallaxImage>

                    <div className="flex flex-1 flex-col p-5">
                      <span
                        className="mb-3 block h-1 w-12 rounded-[var(--radius-pill)]"
                        style={{ background: `var(--color-phase-${f.n})` }}
                        aria-hidden="true"
                      />
                      <p className="label num">{f.semanas}</p>
                      <h3 className="display-md mt-1">{f.nome}</h3>
                      <p className="prose-body mt-2 text-[0.97rem]">{f.texto}</p>
                    </div>
                  </article>
                </LiftCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6 · COMO FUNCIONA ----------
   Tres passos em trilha horizontal com a foto do planner logo abaixo. */
export function Steps() {
  return (
    <section className="band" style={{ '--phase': 'var(--color-phase-2)' }}>
      <div className="wrap">
        <Reveal>
          <h2 className="display-lg max-sm:mx-auto max-sm:text-center mx-auto text-center">Como funciona, em <span style={{ color: 'var(--color-brand)' }}>3 passos</span></h2>
        </Reveal>

        {/* Conteudo centralizado no cartao, a pedido. */}
        <RevealGroup as="ol" className="mt-9 grid gap-4 md:grid-cols-3">
          {PASSOS.map((p, i) => (
            <RevealItem as="li" key={p.titulo}>
              <Spotlight className="card h-full" strength={0.08}>
                <div className="flex h-full flex-col items-center p-6 text-center">
                  <span
                    className="num grid h-11 w-11 place-items-center rounded-[var(--radius-pill)] text-[1.15rem] font-semibold"
                    style={{
                      background: 'var(--color-brand-tint)',
                      color: 'var(--color-brand-press)',
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="display-md mt-4">{p.titulo}</h3>
                  <p className="prose-body mt-2 text-[1rem]">{p.texto}</p>
                </div>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.06}>
          <ParallaxImage className="plate plate-xl mt-8 aspect-[16/9] max-h-[420px]">
            <Photo
              name="planner"
              widths={[640, 1024, 1408]}
              sizes="(min-width: 1180px) 1100px, 92vw"
              width={1024}
              height={576}
              alt="Mãos anotando a carga do treino na planilha apoiada em uma prancheta."
            />
          </ParallaxImage>
        </Reveal>

        {/* --- Objecoes imediatas, em acordeao --- */}
        <div className="mt-12">
          <Reveal>
            <h3 className="display-md max-sm:text-center">Três dúvidas que aparecem agora</h3>
          </Reveal>

          <RevealGroup className="mt-5 flex flex-col gap-3">
            {OBJECOES.map((o) => (
              <RevealItem key={o.p}>
                <details className="card group overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[1.03rem] font-semibold [&::-webkit-details-marker]:hidden">
                    {o.p}
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-pill)] border border-[var(--color-line)] transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="prose-body px-5 pb-5 text-[1rem]">{o.r}</p>
                </details>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
