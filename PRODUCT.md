# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS, delivered as a project with separate assets (`index.html` + `assets/css`, `assets/js`, `assets/img`). Tailwind compiled ahead of time via CLI into a single minified stylesheet — no runtime CDN. GSAP + ScrollTrigger for motion. Deployable to any static host.

## Users

Mulheres a partir dos 30 anos, no Brasil, que treinam em casa e já vêm tentando desenvolver o glúteo sem sucesso. Chegam à página vindas de tráfego pago, no celular, céticas: já fizeram agachamento por meses, já baixaram treinos gratuitos do Instagram, e não veem mudança no espelho. O sintoma que elas próprias descrevem é "treino glúteo e só a perna cresce".

O trabalho que estão tentando fazer: descobrir se o problema é delas (falta de esforço) ou do método — e encontrar uma sequência pronta para seguir, sem academia, sem equipamento e dentro de 30 minutos por treino.

## Product Purpose

Vender "12 Planilhas para Modelar o Bumbum em 3 Meses" — um programa de 12 semanas de treino de glúteo para casa, entregue como 12 planilhas em PDF preenchidas (dia, exercício, séries, repetições, cadência, descanso, carga) mais uma biblioteca de vídeos de execução.

Sucesso da página: a visitante se reconhece no problema, entende por que o esforço anterior não funcionou, e compra. A página é o produto do ponto de vista de design — ela não é lida, ela decide.

## Positioning

**Método T.E.P. — Tensão, Estímulo, Progressão.** Três princípios que agem juntos, distribuídos em 4 fases de 3 semanas: Fundação, Estímulo, Intensificação, Progressão.

O mecanismo defensável é a **ordem**, não o esforço: quando o glúteo passa anos sem ser exigido, quadríceps e lombar assumem o trabalho, e a partir daí cada agachamento treina quem já estava forte. Mais treino só reforça a compensação. Por isso são 12 planilhas encadeadas e não 12 treinos soltos — cada uma prepara a próxima.

Diferencial comercial: o mercado empurra acompanhamento de R$300/mês. Este produto entrega a mesma sequência escrita, para seguir sozinha, em low ticket.

## Operating Context

A compradora usa o produto em casa, no chão da sala, com o celular ou um caderno ao lado. As planilhas são impressas ou abertas na tela; ela anota a carga na própria planilha a cada treino. Sem academia, sem barra, sem anilha — adaptações com mochila, garrafa e elástico estão previstas em coluna própria de cada planilha.

A página é consumida majoritariamente no celular, em rolagem longa, vinda de anúncio.

## Capabilities and Constraints

**Oferta (confirmada nesta sessão):**
- **Básico — R$27:** as 12 planilhas de treino progressivas.
- **Completo — R$47:** tudo do Básico mais 5 bônus — Biblioteca de Execução com 40 Exercícios, Planner de Carga e Medidas, Versão Adaptada Sem Equipamento, Protocolo de Ativação de 5 Minutos, Lista de Compras + 20 Refeições Proteicas.
- Âncora de valor declarada: R$494.
- Garantia de 7 dias integral.
- Sem parcelamento em 12x (o valor não comporta).

**Proibido publicar** (decisões substituídas, herdadas de `spec-landing.md` do projeto de referência):
- Método "A.T.P." / "Ativar, Tensionar, Progredir" — substituído por T.E.P.
- Preços R$67 e 12x R$6,89 — substituídos por R$27 / R$47.
- Fases A(1–3)/T(4–8)/P(9–12) — substituídas por 4 fases de 3 semanas.
- Seção de checkout (order bump, upsell, downsell) — fora de escopo.
- Contador regressivo ou urgência de qualquer tipo — a decisão comercial não foi tomada (`ESTADO.decisoes.urgencia: null`). Contador que reinicia ao recarregar é problema de CDC.

**Destino dos CTAs:** ainda não existe link de checkout. Botões ficam com `href="#"` e `data-plano="basico"` / `data-plano="completo"` para substituição posterior.

**Encoding:** todo conteúdo em UTF-8. O arquivo anterior foi gravado em ASCII e perdeu todos os acentos — é o defeito mais visível da página atual e não pode se repetir.

## Brand Commitments

O produto entregável (as 12 planilhas em PDF) já tem um sistema visual construído e aprovado, documentado em `C:/projetos/infoprodutos-lowticket/12 PLANILHAS BUMBUM 30+/producao/design-system.md`. A landing page **usa o mesmo sistema**: é o que faz página e produto parecerem a mesma coisa, o que sustenta o preço.

Constraints visuais vinculantes, confirmados pelo print do entregável real:
- Display em serifa (Fraunces no entregável), corpo em sans.
- Papel quente `#FAF6F0`, tinta `#17140F`, acento terracota `#C2553F` reservado **só para ação**.
- Cor por fase, esquentando ao longo do programa: sálvia `#7D8F6E` → ocre `#C08A4E` → terracota `#C2553F` → vinho `#8C4A5C`.
- Cantos retos. Réguas de 1px como separador. Labels em caixa-alta com tracking.
- Sem gradiente decorativo, sem sombra difusa, sem card dentro de card.

## Evidence on Hand

**Disponível:**
- Copy completa em 16 dobras: `copy-01-12-planilhas-bumbum-30mais.md` (aplicar as substituições listadas em Capabilities and Constraints).
- 48 fotografias reais em `src/assets/` — luz natural quente, mulheres 30-45 treinando em casa, paleta de madeira/terracota/linho/sálvia que coincide com o sistema. Arquivos são JPEG com extensão `.png` trocada, ~670KB cada, ~32MB no total; exigem otimização.
- Conteúdo das 12 semanas: `../12 PLANILHAS BUMBUM 30+/conteudo/semana-01.md` … `semana-12.md`.
- Print do entregável real (página "Semana 1 — Reconhecer o movimento") como referência de layout, cor e tipografia.

**Ausente — nunca fabricar:**
- Depoimentos, prints de WhatsApp, números de alunas. Não existem ainda. Entram como blocos placeholder visualmente marcados, com slot dimensionado para o conteúdo real.
- Nome da expert e foto. Placeholder em colchetes literais.
- **CREF: decisão do usuário — não aparece na landing page.** Vai apenas no documento entregável.
- Razão social, CNPJ, endereço comercial, domínio de suporte: `ESTADO.decisoes` vazio. Colchetes literais no rodapé.

## Product Principles

1. **A ordem é o produto.** Tudo na página serve para provar que o problema nunca foi esforço, foi sequência. Qualquer elemento que não avance esse argumento é decoração.
2. **A culpa não é dela.** O tom acusa o mercado e a informação solta, nunca a leitora. Ela já fez a parte difícil — apareceu e treinou.
3. **Página e produto são a mesma coisa.** O sistema visual do entregável é o sistema visual da página. Consistência aqui é argumento de preço, não preferência estética.
4. **Nunca inventar prova.** Placeholder marcado é honesto; depoimento fabricado é fraude e destrói a marca. O mesmo vale para urgência sem decisão comercial por trás.
5. **Velocidade é CPA.** A página vive de tráfego pago no celular. Cada segundo de LCP é custo de aquisição. Ambição visual que não couber no orçamento de performance não entra.

## Accessibility & Inclusion

- Público 30+, lido majoritariamente no celular: corpo nunca abaixo de 16px na landing, alvos de toque de 44px no mínimo.
- Contraste AA verificado em todas as seções escuras (`#17140F`) e sobre fotografia — texto sobre foto sempre em container próprio ou faixa sólida, nunca solto.
- `prefers-reduced-motion` desliga toda a animação e entrega os estados finais.
- Conteúdo em português do Brasil, UTF-8, `lang="pt-BR"`.
