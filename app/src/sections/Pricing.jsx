import { Reveal, Spotlight, Magnetic, LiftCard } from '../components/Motion';
import { Icon } from '../components/Icon';
import { OFFER, ITENS_BASICO, ITENS_BONUS, GARANTIAS } from '../content';

/* Cartao de plano.
   Hierarquia: o Completo e o plano recomendado e carrega o peso visual.
   O Basico e uma escolha legitima, nao um espantalho: mesma qualidade de
   acabamento, menos enfase. */
function Plano({ destaque, nome, preco, resumo, itens, ausentes, incluiBasico, onCta, plano }) {
  return (
    <LiftCard
      className="relative h-full"
      lift={destaque ? -6 : -4}
    >
      {destaque && (
        <span
          className="label absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-[var(--radius-pill)] px-4 py-1.5 text-[0.68rem]"
          style={{ background: 'var(--color-brand-deep)', color: 'var(--color-paper)' }}
        >
          Mais escolhido
        </span>
      )}

      <Spotlight
        className="card h-full"
        strength={destaque ? 0.13 : 0.07}
      >
        <div
          className="flex h-full flex-col rounded-[var(--radius-lg)] p-6 sm:p-7"
          style={
            destaque
              ? {
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'inset 0 0 0 2px var(--color-brand)',
                }
              : undefined
          }
        >
          {/* --- Cabecalho: nome, preco, o que e --- */}
          <p className="label">{nome}</p>

          <p className="mt-3 flex items-baseline gap-2">
            <span className="num text-[1.3rem] font-semibold text-[var(--color-ink-mute)]">
              R$
            </span>
            <span
              className="num display text-[5.6rem] leading-[0.88] tracking-[-0.03em]"
              style={{ color: destaque ? 'var(--color-brand)' : 'var(--color-ink)' }}
            >
              {preco}
            </span>
            <span className="text-[0.95rem] text-[var(--color-ink-mute)]">
              pagamento único
            </span>
          </p>

          <p className="mt-4 text-[1.02rem] leading-snug text-[var(--color-ink)]">{resumo}</p>

          <hr className="rule my-6" />

          {/* --- O que entra --- */}
          {incluiBasico && (
            <p className="mb-4 flex items-center gap-2 text-[0.95rem] font-semibold text-[var(--color-ink)]">
              <Icon name="check" size={17} style={{ color: 'var(--color-brand)' }} />
              Tudo do Básico, mais os 5 bônus
            </p>
          )}

          <ul className="flex flex-col gap-4">
            {itens.map((item) => (
              <li key={item.titulo} className="flex gap-3">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-sm)]"
                  style={{
                    background: destaque ? 'var(--color-brand-tint)' : 'var(--color-paper-alt)',
                    color: destaque ? 'var(--color-brand)' : 'var(--color-ink-soft)',
                  }}
                >
                  <Icon name={item.icone} size={18} />
                </span>
                <span className="min-w-0">
                  <b className="block text-[0.98rem] font-semibold leading-snug text-[var(--color-ink)]">
                    {item.titulo}
                  </b>
                  <span className="mt-0.5 block text-[0.92rem] leading-snug text-[var(--color-ink-mute)]">
                    {item.texto}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* O que este plano NAO traz. Preenche o cartao com informacao util
              em vez de espaco morto, e deixa a diferenca entre os planos
              explicita no ponto da decisao. */}
          {ausentes?.length > 0 && (
            <>
              <hr className="rule my-6" />
              <p className="label mb-4">Não inclui</p>
              <ul className="flex flex-col gap-2.5">
                {ausentes.map((a) => (
                  <li
                    key={a}
                    className="flex gap-2.5 text-[0.95rem] leading-snug text-[var(--color-ink-mute)]"
                  >
                    <Icon name="cross" size={16} className="mt-1 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* --- Acao: empurrada para o rodape do cartao, alinhada entre os dois --- */}
          <div className="mt-auto pt-7">
            <Magnetic className="block w-full" pull={destaque ? 0.22 : 0}>
              <button
                type="button"
                onClick={() => onCta(plano)}
                className={`btn btn-block ${destaque ? 'btn-primary' : 'btn-ghost'}`}
              >
                Quero o {nome}
              </button>
            </Magnetic>
            <p className="mt-3 text-center text-[0.88rem] text-[var(--color-ink-mute)]">
              Acesso imediato · {OFFER.garantiaDias} dias de garantia
            </p>
          </div>
        </div>
      </Spotlight>
    </LiftCard>
  );
}

export function Pricing({ id, titulo, subtitulo, onCta }) {
  return (
    <section
      id={id}
      className="band"
      style={{ '--phase': 'var(--color-phase-4)' }}
    >
      <div className="wrap">
        <Reveal>
          <h2 className="display-lg max-w-[18ch] text-balance mx-auto text-center">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="lede mt-4 mx-auto text-center max-sm:mx-auto max-sm:text-center">{subtitulo}</p>
          )}
        </Reveal>

        {/* O Completo vem primeiro no celular: e a escolha recomendada e a
            tela pequena mostra um cartao por vez. */}
        <div className="mt-10 grid items-stretch gap-6 md:mt-12 md:grid-cols-2 md:gap-7">
          <Reveal className="order-2 md:order-1" delay={0.06}>
            <Plano
              nome={OFFER.basico.nome}
              plano={OFFER.basico.plano}
              preco={OFFER.basico.preco}
              resumo="As 12 planilhas do Método T.E.P., da Semana 1 à Semana 12."
              itens={ITENS_BASICO}
              ausentes={ITENS_BONUS.map((b) => b.titulo)}
              onCta={onCta}
            />
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <Plano
              destaque
              nome={OFFER.completo.nome}
              plano={OFFER.completo.plano}
              preco={OFFER.completo.preco}
              resumo="As 12 planilhas e os 5 bônus que fazem você não travar no meio do caminho."
              itens={ITENS_BONUS}
              incluiBasico
              onCta={onCta}
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {GARANTIAS.map((g) => (
              <li
                key={g.texto}
                className="flex items-center gap-2 text-[0.95rem] text-[var(--color-ink-soft)]"
              >
                <Icon name={g.icone} size={18} className="shrink-0" />
                {g.texto}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
