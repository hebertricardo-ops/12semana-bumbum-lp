import { Reveal, RevealGroup, RevealItem, Spotlight, ParallaxImage, Magnetic } from '../components/Motion';
import { Icon } from '../components/Icon';
import { Photo } from '../components/Photo';
import {
  SERVE,
  NAO_SERVE,
  ITENS_BASICO,
  ITENS_BONUS,
  OFFER,
  FAQ,
  BONUS_DETALHADOS,
} from '../content';

/* ---------- 8 · PARA QUEM SERVE ---------- */
export function Fit() {
  return (
    <section className="band band-tight" style={{ '--phase': 'var(--color-phase-3)' }}>
      <div className="wrap">
        <div className="flex flex-col gap-6 max-w-3xl mx-auto items-center">
          <div className="flex flex-col gap-5">
            <Reveal>
              <Spotlight className="card" strength={0.08}>
                <div className="p-6 sm:p-7">
                  <h2 className="display-md mx-auto text-center">É <span style={{ color: 'var(--color-brand)' }}>pra você</span> que…</h2>
                  <ul className="mt-5 flex flex-col gap-3.5 items-center">
                    {SERVE.map((s) => (
                      <li key={s} className="flex gap-3 text-[1.02rem] leading-snug items-center">
                        <Icon
                          name="check"
                          size={19}
                          className="mt-0.5 shrink-0"
                          style={{ color: '#2d8a4e' }}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card">
                <div className="p-6 sm:p-7">
                  <h2 className="display-md mx-auto text-center"><span style={{ color: 'var(--color-brand)' }}>Não é pra você</span> que…</h2>
                  <ul className="mt-5 flex flex-col gap-3.5 items-center">
                    {NAO_SERVE.map((s) => (
                      <li
                        key={s}
                        className="flex gap-3 text-[1.02rem] leading-snug text-[var(--color-ink-mute)] items-center"
                      >
                        <Icon name="cross" size={19} className="mt-0.5 shrink-0" style={{ color: '#c0392b' }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.04}>
            <ParallaxImage className="plate plate-xl h-full min-h-[340px]">
              <Photo
                name="para-quem"
                widths={[480, 768]}
                sizes="(min-width: 1024px) 34vw, 90vw"
                width={768}
                height={960}
                alt="Mulher em posição de afundo na sala de casa."
              />
            </ParallaxImage>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9 · PROVA SOCIAL ----------
   Slots dimensionados para o depoimento real. Nada fabricado. */
export function Testimonials() {
  return (
    <section className="band on-alt" style={{ '--phase': 'var(--color-phase-3)' }}>
      <div className="wrap">
        <Reveal>
          <h2 className="display-lg max-sm:mx-auto max-sm:text-center mx-auto text-center">
            O que muda na <span style={{ color: 'var(--color-brand)' }}>primeira semana</span>
          </h2>
          <p className="lede mt-4 max-w-[46ch] mx-auto text-center">
            Depoimento que vale alguma coisa fala do que ela sentiu, nunca de quem ensinou.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-9 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <RevealItem as="li" key={i}>
              <blockquote className="slot flex h-full min-h-[190px] flex-col items-center gap-3 p-6 text-center">
                <Icon name="quote" size={20} />
                <p className="text-[0.92rem] font-medium tracking-wide">
                  [DEPOIMENTO A INSERIR]
                </p>
                <footer className="label mt-auto">[Nome], [idade] anos</footer>
              </blockquote>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------- 10 · BÔNUS GRÁTIS (ANTIGA ANCORAGEM) ---------- */
export function Anchor() {
  const itens = BONUS_DETALHADOS;
  const valorTotal = itens.reduce((acc, item) => acc + item.valor, 0);

  return (
    <section
      className="px-[clamp(0.5rem,2.5vw,1.25rem)] py-2"
      style={{ '--phase': 'var(--color-phase-4)' }}
    >
      <div className="on-dark band-round band">
        <div className="wrap">
          <Reveal>
            <h2 className="display-lg max-w-[20ch] text-balance mx-auto text-center">
              Ganhe <span style={{ color: 'var(--color-brand)' }}>+6 Bônus</span> Comprando Hoje
            </h2>
            <p className="lede mt-4 max-w-[46ch] mx-auto text-center">
              Tudo isso seria <s className="num">R${valorTotal}</s> se fosse vendido separadamente.
              Comprando hoje, <span style={{ color: 'var(--color-brand)' }}>é grátis</span>.
            </p>
          </Reveal>

          {/* Grid de bônus: mockup inline com texto */}
          <RevealGroup as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {itens.map((item) => (
              <RevealItem as="li" key={item.id}>
                <Spotlight className="card h-full" strength={0.08}>
                  <div className="flex h-full gap-5 p-6">
                    {/* Mockup à esquerda */}
                    <div className="flex w-28 shrink-0 items-start justify-center">
                      <img
                        src={`/img/bonus-${item.id}-480.webp`}
                        alt={item.titulo}
                        width={112}
                        height={159}
                        decoding="async"
                        className="h-auto w-full object-contain"
                      />
                    </div>

                    {/* Conteúdo à direita */}
                    <div className="flex min-w-0 flex-col">
                      <span
                        className="mb-2 inline-block w-fit rounded-[var(--radius-pill)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide"
                        style={{
                          background: 'var(--color-brand)',
                          color: 'var(--color-paper)',
                        }}
                      >
                        <s>R${item.valor}</s> - GRÁTIS
                      </span>

                      <h3 className="display-md text-[1.05rem] leading-tight">{item.numero} · {item.titulo}</h3>
                      <p className="prose-body mt-2 text-[0.9rem] leading-snug">{item.texto}</p>

                      <p className="mt-auto pt-3 text-[0.95rem] font-semibold flex items-center gap-2 flex-wrap">
                        <s className="num text-[rgba(250,246,240,0.5)]">R${item.valor}</s>
                        <span style={{ color: 'var(--color-brand)' }}>Grátis</span>
                      </p>
                    </div>
                  </div>
                </Spotlight>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Call to value total */}
          <Reveal delay={0.08}>
            <div className="mt-10 text-center">
              <p className="display-md">
                Tudo isso seria <s className="num">R${valorTotal}</s> separadamente.
              </p>
              <p className="mt-2 text-[1.1rem]">
                Comprando hoje, <span style={{ color: 'var(--color-brand)' }}>é grátis</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 11 · GARANTIA ----------
   Selo real (garantia-7dias.png, fundo transparente) abre a secao,
   centralizado em toda largura de tela, antes de qualquer texto. */
export function Guarantee() {
  return (
    <section className="band band-tight" style={{ '--phase': 'var(--color-phase-4)' }}>
      <div className="wrap wrap-narrow">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="flex flex-col items-center p-8 sm:p-10 text-center">
              {/* Selo grande, em destaque no topo do card */}
              <div className="mb-6">
                <img
                  src="/img/selo-garantia-7dias-loop.gif"
                  width={360}
                  height={360}
                  alt="Selo de garantia de 7 dias"
                  loading="lazy"
                  decoding="async"
                  className="w-56 sm:w-64 lg:w-72 mx-auto"
                />
              </div>

              <h2 className="display-lg max-w-[24ch] text-balance mx-auto text-center">
                <span style={{ color: 'var(--color-brand)' }}>Garantia Incondicional</span>
              </h2>

              <p className="prose-body mt-5 mx-auto text-center max-w-[50ch]">
                Você tem <strong>{OFFER.garantiaDias} dias de garantia integral</strong>.
                Acessa tudo, baixa tudo, faz a primeira semana completa. Se não fizer
                sentido para você, responde o e-mail de compra e devolvemos 100% do valor,
                sem formulário, sem pergunta, sem justificativa.
              </p>

              <p className="prose-body mt-4 mx-auto text-center max-w-[50ch]">
                E eu consigo oferecer isso por um motivo simples:{' '}
                <strong>
                  na primeira semana você já sente o glúteo trabalhando de forma diferente.
                </strong>{' '}
                Não é resultado no espelho, é cedo para isso. É a sensação de que o
                exercício finalmente está acontecendo no lugar certo. Quem sente isso não
                pede reembolso.
              </p>

              <p className="pull-quote mt-7 mx-auto text-center max-w-[40ch]">
                Ou seja: o único jeito de você sair perdendo é não testar.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 14 · CUSTO DE FICAR PARADA ---------- */
export function Standstill() {
  return (
    <section
      className="px-[clamp(0.5rem,2.5vw,1.25rem)] py-2"
      style={{ '--phase': 'var(--color-phase-4)' }}
    >
      <div className="on-dark band-round band">
        <div className="wrap">
          <div className="grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-11">
            <Reveal>
              <ParallaxImage className="plate plate-xl aspect-[3/4]">
                <Photo
                  name="custo-parada"
                  widths={[480, 768, 1024]}
                  sizes="(min-width: 768px) 38vw, 88vw"
                  width={768}
                  height={1024}
                  alt="Mulher em isometria na parede, sozinha na sala."
                />
              </ParallaxImage>
            </Reveal>

            <div className="max-sm:text-center">
              <Reveal>
                <h2 className="display-lg mx-auto text-center">Me responda somente a <span style={{ color: 'var(--color-brand)' }}>verdade</span>:</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="display-md mt-5 mx-auto text-center" style={{ color: 'var(--color-phase-2)' }}>
                  Quantas semanas você já treinou glúteo sem sair do lugar?
                </p>
              </Reveal>
              <Reveal delay={0.09}>
                <p className="prose-body mt-5 mx-auto text-center">8 semanas? 6 meses? Um ano?</p>
                <p className="prose-body mt-3 mx-auto text-center">
                  Agora a conta ao contrário: se esse mesmo tempo tivesse sido gasto numa
                  sequência com progressão escrita, onde você estaria hoje?
                </p>
                <p className="prose-body mt-3 mx-auto text-center">
                  O problema nunca foi o tempo que você investiu. Foi o tempo investido{' '}
                  <strong>sem ordem</strong>.
                </p>
              </Reveal>
              <Reveal delay={0.13}>
                <p className="pull-quote mt-7 mx-auto text-center">
                  E daqui a três meses você vai estar exatamente onde está, ou 12 planilhas
                  à frente.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 17 · FAQ ---------- */
export function Faq() {
  return (
    <section id="faq" className="band" style={{ '--phase': 'var(--color-phase-4)' }}>
      <div className="wrap wrap-narrow">
        <Reveal>
          <h2 className="display-lg mx-auto text-center">Perguntas <span style={{ color: 'var(--color-brand)' }}>Frequentes</span></h2>
        </Reveal>

        <RevealGroup className="mt-8 flex flex-col gap-3">
          {FAQ.map((f) => (
            <RevealItem key={f.p}>
              <details className="card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[1.03rem] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.p}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-pill)] border border-[var(--color-line)] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="prose-body px-5 pb-5 text-[1rem]">{f.r}</p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------- RODAPE ----------
   Reduzido a pedido: so email, razao social+CNPJ e copyright. Dados legais
   em colchetes literais ate a definicao comercial. */
export function Footer() {
  return (
    <footer className="on-dark">
      <div className="wrap py-12 text-center sm:text-left">
        <p className="mt-6 text-[0.85rem] text-[rgba(250,246,240,0.5)]">
          © 2026 HypeDigitalX · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ---------- ANCHOR SUMMARY (TABELA SIMPLES) ---------- */
export function AnchorSummary() {
  const itens = BONUS_DETALHADOS;
  const valorBonus = itens.reduce((acc, item) => acc + item.valor, 0);
  const valorPrincipal = OFFER.completo.preco;
  const valorTotal = valorPrincipal + valorBonus;

  return (
    <section
      className="px-[clamp(0.5rem,2.5vw,1.25rem)] py-2"
      style={{ '--phase': 'var(--color-phase-4)' }}
    >
      <div className="on-dark band-round band">
        <div className="wrap">
          <Reveal>
            <h2 className="display-lg max-w-[20ch] text-balance mx-auto text-center">
              Resumo do que você leva <span style={{ color: 'var(--color-brand)' }}>hoje</span>
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card mt-8 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[rgba(250,246,240,0.16)]">
                    <th className="px-5 py-4 text-[0.85rem] font-semibold uppercase tracking-wide text-[rgba(250,246,240,0.7)]">
                      Item
                    </th>
                    <th className="px-5 py-4 text-right text-[0.85rem] font-semibold uppercase tracking-wide text-[rgba(250,246,240,0.7)]">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[rgba(250,246,240,0.08)]">
                    <td className="px-5 py-3.5 text-[0.99rem]">
                      <span className="font-semibold">{OFFER.completo.nome}</span>
                      <span className="block text-[0.88rem] text-[rgba(250,246,240,0.6)]">
                        12 planilhas + 5 bônus
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <s className="num text-[0.99rem] text-[rgba(250,246,240,0.5)]">
                        R${valorPrincipal + 20}
                      </s>
                    </td>
                  </tr>
                  {itens.map((item) => (
                    <tr key={item.id} className="border-b border-[rgba(250,246,240,0.08)]">
                      <td className="px-5 py-3.5 text-[0.95rem] text-[rgba(250,246,240,0.85)]">
                        {item.numero} · {item.titulo}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <s className="num text-[0.95rem] text-[rgba(250,246,240,0.5)]">
                          R${item.valor}
                        </s>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[rgba(250,246,240,0.24)]">
                    <td className="px-5 py-4 text-[1.05rem] font-semibold">
                      Valor total se fosse separado
                    </td>
                    <td className="px-5 py-4 text-right">
                      <s className="num text-[1.2rem] font-semibold text-[rgba(250,246,240,0.6)]">
                        R${valorTotal}
                      </s>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-[1.1rem] font-bold">
                      Hoje você paga apenas
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span
                        className="num text-[1.4rem] font-bold"
                        style={{ color: 'var(--color-brand)' }}
                      >
                        R${valorPrincipal}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA (BOTÃO DIRETO) ---------- */
export function FinalCta({ onCta }) {
  return (
    <section
      className="band"
      style={{ '--phase': 'var(--color-phase-4)' }}
    >
      <div className="wrap text-center">
        <Reveal>
          <h2 className="display-lg max-w-[18ch] text-balance mx-auto">
            Quem rolou até aqui já <span style={{ color: 'var(--color-brand)' }}>sabe o que quer</span>
          </h2>
          <p className="lede mt-4 mx-auto max-w-[48ch]">
            12 planilhas, 6 bônus, garantia de 7 dias. Tudo por R${OFFER.completo.preco}.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex justify-center">
            <Magnetic pull={0.22}>
              <button
                type="button"
                onClick={() => onCta(OFFER.completo.plano)}
                className="btn btn-primary btn-lg"
              >
                Quero meu acesso agora
                <Icon name="arrow" size={20} />
              </button>
            </Magnetic>
          </div>
          <p className="mt-4 text-[0.92rem] text-[var(--color-ink-mute)]">
            Acesso imediato · {OFFER.garantiaDias} dias de garantia integral
          </p>
        </Reveal>
      </div>
    </section>
  );
}
