# 12 Planilhas para Crescer o Bumbum Treinando em Casa para Mulheres 30+

Landing page de resposta direta, React + Node, otimizada para tráfego pago vindo
do Instagram (Meta Ads) no celular.

## Rodar

```bash
npm install          # dependências
npm run dev          # desenvolvimento (Vite, porta 5173)
npm run serve        # build + servidor Node (porta 3000)
```

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera `dist/` |
| `npm start` | Sobe o servidor Express sobre um `dist/` já existente |
| `npm run hero` | Recorta e otimiza `public/hero.png` para `app/public/img/hero-*.{avif,webp}` |
| `npm run badges` | Recorta e otimiza selos (`public/garantia-7dias.png`) para `app/public/img/` |

## Estrutura

```
app/
  index.html            Documento base, preload do hero, fontes
  src/
    main.jsx            Entrada React
    App.jsx             Ordem das seções e roteamento dos CTAs
    content.js          TODO o texto visível da página
    styles.css          Design system: tokens, tipografia, superfícies, botões
    components/
      Motion.jsx        Primitivas de interação (reveal, spotlight, magnético, parallax)
      Icon.jsx          Sprite SVG do sistema
      Photo.jsx         <picture> responsivo AVIF/WebP
      Dock.jsx          Barra de CTA fixa + barra de progresso
    sections/
      Hero.jsx          Dobra inicial: mockup estático + copy
      Problem.jsx       Pensamentos ("Você já se pegou pensando…"), os 5 pontos
      Method.jsx        Método T.E.P., 4 fases, 3 passos
      Pricing.jsx       Cartões de plano (usado duas vezes)
      Close.jsx         Para quem serve, depoimentos, garantia, ancoragem, FAQ, rodapé
  public/img/           Imagens otimizadas servidas em /img/*
server/index.js         Express: compressão, cache, SPA fallback, /healthz
scripts/build-hero.mjs    Pipeline de recorte do mockup da hero
scripts/build-badges.mjs  Pipeline de recorte dos selos (garantia)
legacy/                 Versão anterior em HTML estático, preservada
```

## Ordem das seções

Hero → Pensamentos → 5 pontos → Método T.E.P. → 3 passos → **Depoimentos** →
**Garantia** → Preço → Para quem serve → Ancoragem → Custo de ficar parada →
Preço (repetido) → FAQ → Rodapé.

Depoimentos e garantia vêm **antes** do primeiro bloco de preço, de propósito:
a leitora vê prova social e risco removido antes de decidir.

## Onde mexer

**Texto:** tudo em `app/src/content.js`. Layout não carrega copy.

**Preços e oferta:** a constante `OFFER` no topo de `content.js`. Os dois blocos
de preço e a barra fixa leem do mesmo lugar.

**Link de checkout:** ainda não existe. O objeto `CHECKOUT` em `app/src/App.jsx`
está com `null` nos dois planos; enquanto estiver assim, o clique rola até a
seção de preço em vez de morrer num link vazio. Quando o link sair:

```js
const CHECKOUT = {
  basico: 'https://...',
  completo: 'https://...',
};
```

**Pixel do Meta:** `handleCta` já dispara `fbq('InitiateCheckout')` com o plano
como `content_name`, antes do redirecionamento. Falta só incluir o script do
pixel no `app/index.html`.

## Sistema visual

Herdado do entregável em PDF, para que página e produto pareçam a mesma coisa:
papel `#FAF6F0`, tinta `#17140F`, display em Fraunces, corpo em Libre Franklin,
e uma cor por fase que esquenta ao longo do programa (sálvia, ocre, terracota,
vinho).

Duas divergências deliberadas em relação ao `PRODUCT.md`:

1. **Cantos arredondados.** O PDF usa cantos retos; a página usa uma escala
   única de raios (`--radius-*`), decisão confirmada nesta sessão.
2. **Terracota de ação escurecida.** `#C2553F` sobre texto claro dá 4.18:1 e
   reprova AA. Botões usam `--color-brand-deep` (`#A8442F`, 5.6:1). A cor
   original continua em réguas e superfícies, onde não é tinta de texto.

As cores de fase têm variantes `-ink` para quando forem usadas como texto: as
versões de superfície não alcançam AA como tinta.

## Interação

Todo efeito de ponteiro fica atrás de `(hover: hover) and (pointer: fine)`, então
não custa frame nenhum no celular:

- **Tilt** no mockup da hero
- **Spotlight** que segue o cursor dentro dos cartões
- **Magnetic** nos CTAs primários
- **Parallax** nas fotos, dentro do próprio container mascarado
- **Reveal** em cascata na entrada em viewport

Nada usa `useState` para valor contínuo (tudo em motion values) e nada usa
`addEventListener('scroll')`. Sob `prefers-reduced-motion` a página entrega os
estados finais, verificado: zero elementos invisíveis.

## Verificado

- Contraste WCAG AA em toda a página
- Alvos de toque de 44px ou mais
- Sem overflow horizontal em 390px e 1440px
- Sem erros de console
- LCP 732ms, CLS 0, 194KB no total (mobile, servidor local)

## Pendências de conteúdo

Slots marcados com colchetes literais, nunca preenchidos com material
fabricado:

- Prints de comentário (4) e depoimentos (3)
- Nome e foto da expert, anos de atuação, número de alunas
- Razão social, CNPJ, endereço, domínio de suporte
