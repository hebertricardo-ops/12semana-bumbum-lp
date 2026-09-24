import { Reveal, RevealGroup, RevealItem, Spotlight, ParallaxImage } from '../components/Motion';
import { Photo } from '../components/Photo';
import { PENSAMENTOS, PROVAS } from '../content';

/* ---------- 3 · APERTAR NA PEDRA ----------
   Lista longa em coluna dupla com pontuacao esparsa, nao 8 linhas com
   hairline sob cada uma. */
export function Thoughts() {
  return (
    <section className="band" style={{ '--phase': 'var(--color-phase-1)' }}>
      <div className="wrap">
        <Reveal>
          <h2 className="display-lg mx-auto text-center">Você já se pegou <span style={{ color: 'var(--color-brand)' }}>pensando…</span></h2>
        </Reveal>

        <RevealGroup as="ul" stagger={0.05} className="mt-8 grid gap-3 sm:grid-cols-2">
          {PENSAMENTOS.map((p) => (
            <RevealItem as="li" key={p}>
              <Spotlight className="card h-full" strength={0.06}>
                <p className="px-5 py-4 text-[1.02rem] italic leading-snug text-[var(--color-ink-soft)] max-sm:text-center">
                  “{p}”
                </p>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 grid items-center gap-7 md:grid-cols-[minmax(0,0.9fr)_1.1fr] md:gap-10">
          <Reveal>
            <ParallaxImage className="plate plate-xl aspect-[4/5]">
              <Photo
                name="dor"
                widths={[480, 768]}
                sizes="(min-width: 768px) 40vw, 90vw"
                width={768}
                height={960}
                alt="Mulher sentada no sofá depois do treino, olhando para o lado."
              />
            </ParallaxImage>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="pull-quote max-sm:mx-auto max-sm:border-l-0 max-sm:pl-0 max-sm:text-center">
              É horrível ter disciplina e não ter resultado. Você está fazendo a parte
              difícil, aparecer, treinar, insistir, e o espelho não devolve nada.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4 · A CULPA NAO E SUA ----------
   Cinco pontos numerados. O numero e o elemento grafico, nao um selo. */
export function Blame() {
  return (
    <section className="band on-alt" style={{ '--phase': 'var(--color-phase-2)' }}>
      <div className="wrap">
        <Reveal>
          <h2 className="display-lg max-w-[22ch] text-balance max-sm:mx-auto max-sm:text-center mx-auto text-center">
            A culpa <span style={{ color: 'var(--color-brand)' }}>não é sua</span>. E eu vou te provar isso em 5 pontos.
          </h2>
        </Reveal>

        <RevealGroup as="ol" className="mt-10 flex flex-col gap-5">
          {PROVAS.map((p, i) => (
            <RevealItem as="li" key={p.titulo}>
              <Spotlight className="card" strength={0.08}>
                <div className="flex gap-4 p-5 sm:gap-6 sm:p-7">
                  <span
                    className="num display shrink-0 text-[2.1rem] leading-none sm:text-[2.6rem]"
                    style={{ color: 'var(--color-phase-2-ink)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display-md text-balance">{p.titulo}</h3>
                    <p className="prose-body mt-2">{p.texto}</p>
                  </div>
                </div>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
