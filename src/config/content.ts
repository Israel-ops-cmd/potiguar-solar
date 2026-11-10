/**
 * Textos da página. Nenhum número de economia, depoimento, cliente ou certificação
 * foi inventado: a copy descreve como a energia solar funciona e o que a avaliação considera.
 */

export const benefits = [
  {
    title: "Menos peso na conta de luz",
    text: "A energia gerada no seu telhado abate o consumo registrado pela distribuidora, mês após mês.",
  },
  {
    title: "Previsibilidade no orçamento",
    text: "Com parte da sua energia vindo do sol, reajustes e bandeiras tarifárias pesam menos no fim do mês.",
  },
  {
    title: "Créditos que não se perdem",
    text: "O excedente vai para a rede e vira crédito de energia, usado à noite, em dias nublados ou nos meses seguintes.",
  },
  {
    title: "Um ativo no seu imóvel",
    text: "O sistema fica no seu telhado e trabalha em silêncio por muitos anos, com pouca manutenção.",
  },
];

export const solutions = [
  {
    key: "residencial",
    index: "01",
    label: "Residencial",
    title: "Para a casa onde o ar-condicionado não tira folga.",
    text: "Em Natal, calor o ano inteiro significa ar-condicionado, geladeira e chuveiro trabalhando sem pausa. Um sistema dimensionado para o consumo da sua família transforma o sol que bate no telhado em energia para a rotina da casa.",
    points: [
      "Projeto calculado a partir do histórico da sua conta",
      "Instalação planejada para preservar o telhado",
      "Acompanhamento da geração pelo celular",
    ],
    cta: "Simular para minha casa",
    type: "residencial" as const,
  },
  {
    key: "comercial",
    index: "02",
    label: "Comercial",
    title: "Para o negócio em que energia é custo fixo de todo mês.",
    text: "Lojas, clínicas, restaurantes, escritórios e galpões costumam ter consumo alto justamente no horário de mais sol. É aí que a geração própria faz diferença no caixa e libera margem para o que importa no seu negócio.",
    points: [
      "Estudo de consumo por horário e por estação",
      "Projeto para telhados amplos, lajes e estruturas metálicas",
      "Cronograma pensado para não parar a operação",
    ],
    cta: "Simular para minha empresa",
    type: "comercial" as const,
  },
];

export const savingsFactors = [
  { title: "Seu consumo", text: "O histórico de kWh da conta mostra quanto o sistema precisa gerar." },
  { title: "Seu telhado", text: "Área disponível, inclinação, orientação e sombras definem quanto dá para instalar." },
  { title: "Sua tarifa", text: "Classe de consumo, modalidade tarifária e impostos mudam o valor de cada kWh." },
  { title: "As regras da compensação", text: "A Lei 14.300/2022 define como os créditos de energia são calculados e usados." },
];

export const differentials = [
  {
    title: "Dimensionamento honesto",
    text: "O sistema é calculado para o seu consumo real. Nem maior do que você precisa, nem menor do que vale a pena.",
  },
  {
    title: "Proposta que você entende",
    text: "Equipamentos, potência, prazos e estimativa de geração por escrito, em linguagem clara, sem letras miúdas.",
  },
  {
    title: "Do projeto à homologação",
    text: "Projeto elétrico, instalação e pedido de conexão junto à distribuidora conduzidos em um único fluxo.",
  },
  {
    title: "Equipamentos regularizados",
    text: "Módulos e inversores com registro no Inmetro, como exige a regulamentação brasileira.",
  },
  {
    title: "Geração à vista",
    text: "Monitoramento pelo aplicativo do inversor, para você acompanhar quanto o sistema produz a cada dia.",
  },
];

export const energyFlow = [
  { title: "Sol", text: "A luz atinge os módulos fotovoltaicos no telhado." },
  { title: "Módulos", text: "As células convertem a luz em energia elétrica em corrente contínua." },
  { title: "Inversor", text: "Converte para corrente alternada, a mesma das suas tomadas." },
  { title: "Seu imóvel", text: "A energia abastece o consumo no momento em que é gerada." },
  { title: "Rede", text: "O que sobra vai para a distribuidora e vira crédito na sua conta." },
];

export const process = [
  { title: "Simulação", text: "Você informa a média da sua conta e o tipo de imóvel. É rápido e sem compromisso." },
  { title: "Análise da conta", text: "Com o histórico de consumo em mãos, estimamos a potência adequada para o seu caso." },
  { title: "Visita técnica", text: "Avaliação do telhado, da estrutura, do sombreamento e do padrão de entrada de energia." },
  { title: "Proposta", text: "Projeto, equipamentos, prazos e condições apresentados de forma transparente." },
  { title: "Instalação", text: "Montagem da estrutura, dos módulos e do inversor por equipe técnica." },
  { title: "Homologação", text: "Pedido de conexão à distribuidora, troca do medidor e sistema pronto para gerar." },
];

export const faq = [
  {
    q: "Quanto vou economizar com energia solar?",
    a: "Depende do seu consumo, da área e orientação do telhado, do sombreamento e da sua tarifa. Por isso não trabalhamos com promessas genéricas: a simulação é o primeiro passo, e o número definitivo só sai depois da avaliação técnica.",
  },
  {
    q: "A conta de luz chega a zerar?",
    a: "Não. Mesmo gerando toda a energia que consome, você continua pagando itens como o custo de disponibilidade da rede e a contribuição de iluminação pública. Pelas regras da Lei 14.300/2022, também há uma parcela relativa ao uso da rede sobre a energia compensada.",
  },
  {
    q: "E à noite ou em dias nublados?",
    a: "Em dias nublados a geração diminui, mas não para. À noite, o imóvel usa energia da rede, que é abatida pelos créditos gerados durante o dia.",
  },
  {
    q: "Meu telhado serve para energia solar?",
    a: "A maioria dos telhados de cerâmica, fibrocimento, metálicos e lajes recebe o sistema. A visita técnica avalia estrutura, inclinação, orientação e sombras antes de qualquer proposta.",
  },
  {
    q: "Quanto tempo leva da proposta até o sistema funcionando?",
    a: "A instalação física costuma ser rápida. O prazo total depende principalmente da aprovação do projeto e da vistoria pela distribuidora, que seguem prazos definidos pela regulamentação.",
  },
  {
    q: "O sistema precisa de manutenção?",
    a: "Pouca. Limpeza periódica dos módulos e verificação das conexões ajudam a manter a geração. O monitoramento pelo aplicativo mostra quando algo foge do normal.",
  },
  {
    q: "Funciona para empresas e comércios?",
    a: "Sim. Imóveis comerciais costumam consumir mais energia durante o dia, que é justamente quando o sistema gera. O estudo considera o perfil de consumo do negócio e a modalidade tarifária.",
  },
];
