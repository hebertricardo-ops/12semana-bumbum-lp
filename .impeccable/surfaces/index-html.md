---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Landing page — 12 Planilhas Bumbum 30+

Scope: `index.html`, página única de vendas. Visitor mode: **Persuade**.

Audience: mulher 30+, treina em casa, chega de anúncio no celular, cética porque já treinou glúteo por meses sem resultado. Job: descobrir se o problema é ela ou o método, e achar uma sequência pronta para seguir.

Action: comprar o **Completo R$47** (o Básico R$27 existe para dar forma à escolha, não para ganhar). CTAs sem destino ainda — `href="#"` + `data-plano`.

Proof on hand: 48 fotos reais em `src/assets`, o entregável real (print da Semana 1), conteúdo das 12 semanas. **Sem depoimentos, sem expert, sem CNPJ** — placeholders marcados, nunca fabricados. Sem CREF na página (decisão do usuário: só no entregável). Sem urgência (decisão comercial não tomada).

Unresolved: links de checkout; depoimentos; dados legais do rodapé; PNGs reais das planilhas (o hero recria a Semana 1 em HTML/CSS por ora).

## Direction contract

**THESIS.** A página não *descreve* a progressão de 12 semanas — ela a executa. A rolagem é o programa: quem desce atravessa Fundação, Estímulo, Intensificação e Progressão e sente a ordem antes de ler sobre ela. Recusa a página de venda infoproduto padrão: pílulas, badges, contadores, emojis-ícone, caixas empilhadas de igual peso.

**OWN-WORLD.** O sistema do entregável, na sua faixa saturada — não na macia. Papel `#FAF6F0`, tinta `#17140F`, e as quatro fases como **campos de página inteira**, não como detalhes: sálvia `#7D8F6E` → ocre `#C08A4E` → terracota `#C2553F` → vinho `#8C4A5C`. Terracota só em ação. Cantos retos em tudo. Réguas de 1px como único separador — zero card, zero sombra, zero gradiente decorativo. Labels caixa-alta com tracking largo. Fraunces (display, herdada do produto) sobre Libre Franklin (corpo). Trilha de fase fixa na borda esquerda, sempre presente.

**STORY.** Ela entende que não falhou por preguiça, mas por ordem: o glúteo desligado fez quadríceps e lombar assumirem, e mais treino só reforçou isso. Acredita porque o método tem nome, etapas e um artefato visível. Age comprando o Completo.

**FIRST VIEWPORT.** Faixa sálvia de 8px cortando o topo. À esquerda, em Fraunces ~clamp(44,6vw,86)px, a headline em três linhas revelando por máscara — **sem kicker acima dela**; a fase é lida na trilha, não numa etiqueta. À direita, o mockup: notebook com a página da Semana 1 recriada em HTML real — faixa de fase, "Semana 1" em Fraunces sálvia, foto, tabela de PARÂMETROS — com celular sobreposto no canto inferior esquerdo exibindo o vídeo de execução, ambos sob tilt 3D leve que responde ao ponteiro. Sem preço, sem botão, sem logo: a dobra 1 da copy proíbe os três. A trilha de fase já visível na borda esquerda, marcando 1/12.

**FORM.** "A rolagem é o programa de 12 semanas" — índice 3 da minha lista ordenada de sete estruturas, travada pelo usuário como líder do deal. Seed key `2356c73d` (scope surface, mode persuade, deal 3·2·6).

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
