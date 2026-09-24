/* Todo texto visivel da pagina vive aqui. Layout nunca carrega copy.
   Regra do projeto: nenhuma prova social fabricada. Slots ausentes ficam
   marcados com colchetes literais ate existir conteudo real. */

export const OFFER = {
  basico: { nome: 'Básico', preco: 27, plano: 'basico' },
  completo: { nome: 'Completo', preco: 47, plano: 'completo' },
  ancora: 494,
  garantiaDias: 7,
};

export const HERO = {
  titulo: '12 Planilhas para Crescer o Bumbum Treinando em Casa para Mulheres 30+',
  lede: 'Você já tentou agachamento, treino que achou na internet, treino que a amiga indicou — e o bumbum continua exatamente igual. O problema nunca foi esforço: foi treinar sem ordem, carga e progressão.',
  specs: ['Sem academia', 'Sem equipamento caro', '30 minutos por treino'],
};

export const PENSAMENTOS = [
  'Eu treino glúteo toda semana e só a minha perna cresce.',
  'Faço agachamento há meses e meu bumbum está exatamente igual.',
  'Será que eu estou fazendo o exercício errado esse tempo todo?',
  'Todo mundo consegue resultado, menos eu.',
  'Já baixei três treinos grátis e nunca passei da segunda semana.',
  'Não sei se estou pegando peso demais ou de menos.',
  'Sinto minha lombar antes de sentir o glúteo.',
  'Emagreci, mas continuo sem forma nenhuma.',
];

export const PROVAS = [
  {
    titulo: 'Você nunca teve uma sequência pronta para seguir.',
    texto: 'Treino solto do Instagram não é programa. Sem ordem e sem progressão, seu corpo não tem motivo para mudar.',
  },
  {
    titulo: 'Ninguém te avisou que o glúteo pode estar desativado.',
    texto: 'Anos de rotina sentada, carro, escritório, celular: o glúteo aprende a não trabalhar.',
  },
  {
    titulo: 'Sem ativação antes, todo agachamento vira exercício de perna.',
    texto: 'Não é força de vontade que falta. É a ordem dos fatores.',
  },
  {
    titulo: 'As informações disponíveis são confusas e contraditórias.',
    texto: 'Um vídeo manda pegar peso, outro manda fazer 30 repetições, o terceiro diz que elástico basta.',
  },
  {
    titulo: 'O mercado complica o que deveria ser simples.',
    texto: 'Ninguém quer te vender uma planilha. Todos querem te vender acompanhamento de R$300 por mês.',
  },
];

export const TEP = [
  {
    letra: 'T',
    nome: 'Tensão',
    texto: 'Manter o músculo sob carga do começo ao fim do movimento: amplitude controlada, cadência lenta, sem impulso.',
  },
  {
    letra: 'E',
    nome: 'Estímulo',
    texto: 'Dar ao corpo um motivo suficiente para se adaptar: a escolha certa de exercício, volume e esforço.',
  },
  {
    letra: 'P',
    nome: 'Progressão',
    texto: 'Evoluir de forma planejada e escrita, não por vontade do dia.',
  },
];

export const FASES = [
  {
    n: 1,
    nome: 'Fundação',
    semanas: 'Semanas 01 a 03',
    texto: 'Reconhecer o movimento e acordar o glúteo. Carga baixa, consciência alta.',
    img: 'fase-1',
    alt: 'Ponte de glúteo no tapete da sala, fase de fundação.',
  },
  {
    n: 2,
    nome: 'Estímulo',
    semanas: 'Semanas 04 a 06',
    texto: 'O volume sobe e a tensão passa a ser mantida. O corpo ganha motivo para se adaptar.',
    img: 'fase-2',
    alt: 'Ponte de glúteo com elástico acima dos joelhos.',
  },
  {
    n: 3,
    nome: 'Intensificação',
    semanas: 'Semanas 07 a 09',
    texto: 'Unilaterais e pausas isométricas. É onde a execução vira força de verdade.',
    img: 'fase-3',
    alt: 'Afundo unilateral na sala, fase de intensificação.',
  },
  {
    n: 4,
    nome: 'Progressão',
    semanas: 'Semanas 10 a 12',
    texto: 'A carga sobe semana a semana, escrita na planilha, não decidida no impulso.',
    img: 'fase-4',
    alt: 'Subida no banco com halteres, fase de progressão.',
  },
];

export const PASSOS = [
  {
    titulo: 'Baixe',
    texto: 'Acesso no seu e-mail em menos de 2 minutos depois da compra.',
  },
  {
    titulo: 'Abra a Planilha 1',
    texto: 'Já vem preenchida: dia, exercício, séries, repetições e o vídeo de execução de cada movimento.',
  },
  {
    titulo: 'Treine hoje',
    texto: '30 minutos, em casa, com o que você já tem. Anote sua carga na própria planilha.',
  },
];

export const OBJECOES = [
  {
    p: 'Serve para o meu nível?',
    r: 'A Planilha 1 é deliberadamente fácil. Se você está destreinada, ela é o seu ponto de partida. Se você já treina, começa na mesma ordem com carga maior: a sequência é a mesma, o peso é seu.',
  },
  {
    p: 'Preciso comprar equipamento?',
    r: 'Não. Cada planilha tem a coluna de adaptação com mochila, garrafa e elástico. Se você tiver halteres, melhor, mas não é pré-requisito de nada.',
  },
  {
    p: 'E se eu não tiver 30 minutos em algum dia?',
    r: 'Toda planilha marca os dois exercícios principais da semana. Em dia apertado você faz só esses dois, em 12 minutos, e a semana não zera.',
  },
];

export const ITENS_BASICO = [
  {
    icone: 'sheet',
    titulo: '12 Planilhas de Treino Progressivas',
    texto: 'As 12 semanas do Método T.E.P., em 4 fases de 3 semanas.',
    valor: 149,
  },
];

export const ITENS_BONUS = [
  {
    icone: 'play',
    titulo: 'Biblioteca de Execução com 40 Exercícios',
    texto: 'Vídeo curto de cada movimento. Você não vai precisar procurar nada no YouTube.',
    valor: 97,
  },
  {
    icone: 'ruler',
    titulo: 'Planner de Carga e Medidas',
    texto: 'É assim que você vê evolução mesmo na semana em que a balança não mexe.',
    valor: 87,
  },
  {
    icone: 'house',
    titulo: 'Versão Adaptada Sem Equipamento',
    texto: 'Alternativa com itens de casa em todos os treinos. Nenhuma compra necessária para começar hoje.',
    valor: 67,
  },
  {
    icone: 'spark',
    titulo: 'Protocolo de Ativação de 5 Minutos',
    texto: 'É o passo que faz o resto funcionar.',
    valor: 47,
  },
  {
    icone: 'basket',
    titulo: 'Lista de Compras e 20 Refeições Proteicas',
    texto: 'Porque glúteo não cresce sem proteína, e nenhuma delas leva mais de 15 minutos.',
    valor: 47,
  },
];

export const SERVE = [
  'Treina glúteo e vê só a perna crescer',
  'Tem mais de 30 e quer voltar a ter forma, não só perder peso',
  'Quer treinar em casa sem depender de academia',
  'Já tentou treinos grátis e nunca terminou nenhum',
  'Tem 30 minutos por dia e não mais que isso',
  'Está cansada de adivinhar se está fazendo certo',
];

export const NAO_SERVE = [
  'Quer resultado sem treinar',
  'Prefere montar seu próprio treino do zero',
  'Espera mudança em uma semana',
];

export const FAQ = [
  {
    p: 'Como vou receber o acesso?',
    r: 'Por e-mail, em até 2 minutos depois da confirmação. Abre no celular, tablet e computador.',
  },
  {
    p: 'Por quanto tempo tenho acesso?',
    r: 'Vitalício, com todas as atualizações futuras incluídas.',
  },
  {
    p: 'Serve se eu treino na academia?',
    r: 'Serve. Os exercícios têm equivalente em máquina indicado na própria planilha.',
  },
  {
    p: 'Em quanto tempo vejo resultado?',
    r: 'Sensação de ativação na primeira semana. Mudança de medida costuma aparecer entre a sexta e a oitava semana, com três treinos semanais e proteína adequada.',
  },
  {
    p: 'Posso pagar no Pix?',
    r: 'Sim: Pix, cartão e boleto.',
  },
  {
    p: 'Tem garantia?',
    r: 'São 7 dias, integral. Você acessa tudo, faz a primeira semana e, se não fizer sentido, responde o e-mail de compra e devolvemos 100% do valor.',
  },
];

export const GARANTIAS = [
  { icone: 'mail', texto: 'Acesso imediato no e-mail' },
  { icone: 'lock', texto: 'Compra 100% segura' },
  { icone: 'shield', texto: '7 dias de garantia integral' },
];

export const BONUS_DETALHADOS = [
  {
    id: 'planner',
    numero: '01',
    titulo: 'Planner de Carga e Medidas',
    texto: 'O caderno de bordo das 12 semanas. Anote carga, repetições e esforço em cada treino — sem isso, progressão não existe. 20 páginas imprimíveis.',
    valor: 87,
    icone: 'ruler',
    paginas: '20 páginas',
    formato: 'PDF A4 · imprimível',
    destaque: 'Inclui regra da dupla superação e curva de evolução'
  },
  {
    id: 'guia-carga',
    numero: '02',
    titulo: 'Guia de Carga Caseira',
    texto: 'Como progredir sem comprar peso. Sistema de carga progressiva com objetos domésticos — garrafas, pacotes, mochila. 14 páginas com escada de progressão por fase.',
    valor: 97,
    icone: 'house',
    paginas: '14 páginas',
    formato: 'PDF A4',
    destaque: 'A escada de progressão para cada uma das 4 fases'
  },
  {
    id: 'protocolo-destrava',
    numero: '03',
    titulo: 'Protocolo Destrava-Glúteo',
    texto: 'O que fazer quando você não sente o glúteo trabalhando. Teste dos 3 sinais + 3 desvios + correções dirigidas. Cartão destacável A5.',
    valor: 97,
    icone: 'spark',
    paginas: '12 páginas + cartão A5',
    formato: 'PDF A4 + cartão destacável',
    destaque: 'Teste dos 3 sinais em 60 segundos antes do treino'
  },
  {
    id: 'lista-compras',
    numero: '04',
    titulo: 'Lista de Compras de 12 Semanas',
    texto: 'O sistema de abastecimento das 12 semanas, amarrado às receitas. Cada lista aponta quais receitas dos e-books aquela compra cobre.',
    valor: 87,
    icone: 'basket',
    paginas: '16 páginas',
    formato: 'PDF A4',
    destaque: '12 listas semanais + preparo em lote de 90 minutos'
  },
  {
    id: '50-receitas',
    numero: '05',
    titulo: '50 Receitas Saborosas e Saudáveis',
    texto: 'Comida de verdade, do dia a dia brasileiro. Até 30 minutos, ingredientes de supermercado de bairro, máximo 8 por receita.',
    valor: 97,
    icone: 'play',
    paginas: '30 páginas',
    formato: 'PDF A4 · 2 receitas/página',
    destaque: 'Café, almoço, jantar, lanches e sobremesas'
  },
  {
    id: '80-receitas-low-carb',
    numero: '06',
    titulo: '80 Receitas Low Carb',
    texto: 'Para quem já escolheu comer com menos carboidrato. Substituições que resolvem 90% dos casos + 80 receitas completas.',
    valor: 97,
    icone: 'play',
    paginas: '46 páginas',
    formato: 'PDF A4 · 2 receitas/página',
    destaque: 'As substituições que resolvem 90% dos casos'
  }
];
