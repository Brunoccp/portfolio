export type BlockType =
  | 'paragraph'
  | 'blockquote'
  | 'list'
  | 'image'
  | 'image-grid'
  | 'table'
  | 'hypothesis-list'
  | 'learning-blocks'
  | 'stakeholder-list'

export interface ImageItem {
  src: string
  caption?: string
}

export interface Hypothesis {
  text: string
  result: 'Validada' | 'Refutada'
}

export interface Learning {
  title: string
  text: string
}

export interface Stakeholder {
  role: string
  approach: string
}

export interface ContentBlock {
  type: BlockType
  text?: string
  items?: string[]
  src?: string
  caption?: string
  images?: ImageItem[]
  headers?: string[]
  rows?: string[][]
  hypotheses?: Hypothesis[]
  learnings?: Learning[]
  stakeholders?: Stakeholder[]
}

export interface CaseSection {
  heading?: string
  blocks: ContentBlock[]
}

export interface CaseData {
  slug: string
  company: string
  readTime: string
  title: string
  heroImage: string
  heroImageAlt: string
  summary: { label: string; text: string }[]
  sections: CaseSection[]
  metrics: { value: string; description: string }[]
  metricsNote: string
}

const assistenciaSaude: CaseData = {
  slug: 'assistencia-saude',
  company: 'PicPay',
  readTime: '8 min',
  title: 'O problema não era churn. Era percepção de valor.',
  heroImage: '/cases/assistencia-saude/IS-TOBE-hub.png',
  heroImageAlt: 'Hub de pós-venda — da lógica do produto para a lógica do uso',
  summary: [
    {
      label: 'Challenge',
      text: 'Produto de assistência saúde com 16% de churn. O time buscava soluções de retenção enquanto o problema real estava na experiência de pós-venda.',
    },
    {
      label: 'Strategy',
      text: 'Redefini o problema: churn era sintoma de desalinhamento entre promessa de valor e experiência de uso. Validei a hipótese em duas camadas — guerrilha e teste estruturado — antes de propor qualquer solução.',
    },
    {
      label: 'Results',
      text: 'Redução de 0,97 p.p. no churn, preservando ~5 mil apólices e R$50k em receita. Tracking implementado onde antes havia ausência total de dado.',
    },
  ],
  sections: [
    {
      blocks: [
        {
          type: 'paragraph',
          text: 'Produto de baixo ticket com dois planos: R$3,80 (telemedicina) e R$10,80 (telemedicina + desconto farmácia + consultas presenciais). Distribuído via app com contratação em um clique e primeiro mês grátis. O modelo facilitava a entrada mas reduzia o nível de consciência na decisão de contratação.',
        },
      ],
    },
    {
      heading: '"O time via retenção. Eu via a causa raiz."',
      blocks: [
        {
          type: 'paragraph',
          text: 'O time tratava churn como o principal problema e buscava soluções de retenção — uma abordagem que atuava apenas no final da jornada. Minha leitura foi diferente: o churn não era a causa, era a consequência de um desalinhamento entre a promessa de valor comunicada na oferta e a experiência entregue no pós-venda. O usuário comprava esperando usar, mas não encontrava clareza no pós-venda. O valor prometido colapsava antes da primeira cobrança.',
        },
        {
          type: 'paragraph',
          text: 'Como cheguei nessa leitura: entrei no produto sem histórico — esse distanciamento foi uma vantagem. Ao navegar pelo pós-venda pela primeira vez, minha reação imediata foi: "qual é a proposta de valor desse produto?" Antes de levar qualquer hipótese para o time, contratei o produto e tentei usar cada benefício. Tive dificuldades reais. Isso confirmou que havia algo estruturalmente errado.',
        },
      ],
    },
    {
      heading: '"Primeiro a direção, depois o investimento."',
      blocks: [
        {
          type: 'paragraph',
          text: 'Camada 1 — Guerrilha',
        },
        {
          type: 'paragraph',
          text: 'Abordei 5 pessoas com perfil de cliente PicPay e observei enquanto navegavam pela jornada de contratação e pós-venda no meu celular. O objetivo não era exploração aberta — era testar hipóteses específicas.',
        },
        {
          type: 'hypothesis-list',
          hypotheses: [
            { text: 'O pós-venda é confuso? → Validada — todos associaram "acionar seguro" à telemedicina, mas esse não era o caminho', result: 'Validada' },
            { text: 'O desconto farmácia é fácil de acessar? → Validada como dor — nenhum usuário encontrou. Um fechou o app, foi ao Google e caiu na FAQ de um produto descontinuado', result: 'Validada' },
            { text: '"Beneficiário" e "dependente" geram confusão? → Validada — a interface priorizava quem recebe o seguro em caso de falecimento, não quem usa os benefícios', result: 'Validada' },
            { text: 'Contratam o plano mais caro porque vem selecionado? → Refutada — contratam pelo valor percebido no desconto farmácia', result: 'Refutada' },
            { text: 'O usuário diferencia "usar assistência" de "acionar seguro"? → Refutada — 4 dos 5 testaram botões aleatoriamente', result: 'Refutada' },
          ],
        },
        {
          type: 'blockquote',
          text: 'Onde eu acho meu desconto farmácia? Achei que teria algum cupom aqui pra usar na farmácia.',
        },
        {
          type: 'blockquote',
          text: 'Acionar seguro — isso é para caso eu tenha problemas na minha telemedicina?',
        },
        {
          type: 'image-grid',
          images: [
            {
              src: '/cases/assistencia-saude/roteiro-guerrilha.jpg',
              caption: 'Roteiro de hipóteses — contratação, pós-venda, usabilidade',
            },
            {
              src: '/cases/assistencia-saude/notas-guerrilha.png',
              caption: 'Anotações ao vivo durante a guerrilha',
            },
          ],
        },
        {
          type: 'image',
          src: '/cases/assistencia-saude/persona1.png',
          caption: 'Produto atual durante o teste',
        },
      ],
    },
    {
      blocks: [
        {
          type: 'paragraph',
          text: 'Camada 2 — Pesquisa estruturada',
        },
        {
          type: 'paragraph',
          text: 'Com os sinais da guerrilha, apresentei para GPM, Head de Produto e PM. O time aprovou um plano de 20 dias com três camadas sequenciais:',
        },
        {
          type: 'list',
          items: [
            'Produto atual — ampliar a amostra e garantir que os problemas não eram artefato do teste anterior',
            'Card sorting — hierarquia e nomenclatura definidas por comportamento real. 80% priorizaram consultas e desconto farmácia no topo. "Consulta online" venceu "telemedicina". Essas escolhas foram direto para a interface — não como sugestão, como decisão de produto',
            'Nova proposta — participantes realizaram as mesmas tarefas que haviam falhado. Encontraram o desconto farmácia. Conseguiram iniciar a telemedicina.',
          ],
        },
        {
          type: 'image',
          src: '/cases/assistencia-saude/Plano de pesquisa.png',
          caption: 'Plano de 20 dias aprovado pela liderança',
        },
        {
          type: 'image-grid',
          images: [
            {
              src: '/cases/assistencia-saude/card-sorting.jpeg',
              caption: 'Card sorting — participantes organizando hierarquia e nomenclaturas',
            },
            {
              src: '/cases/assistencia-saude/card-sorting7.jpeg',
              caption: 'Resultado — 80% priorizaram consultas e desconto farmácia no topo',
            },
          ],
        },
        {
          type: 'image',
          src: '/cases/assistencia-saude/Teste-Estruturado.jpeg',
          caption: 'Teste estruturado — sessão presencial com moderação',
        },
      ],
    },
    {
      heading: '"Não foi um redesign. Foi uma decisão sobre o que era possível mudar."',
      blocks: [
        {
          type: 'paragraph',
          text: 'O produto operava com processos definidos pela seguradora parceira: desconto farmácia fora da plataforma, telemedicina via WhatsApp, cadastro de dependentes por telefone. Partir dessa clareza evitou investimento em soluções inviáveis.',
        },
        {
          type: 'paragraph',
          text: 'A decisão estratégica: se não posso mudar o processo, garanto que o usuário sabe o que vai acontecer em cada etapa. Para cada benefício o esqueleto informativo foi o mesmo — como funciona, onde encontro, o que fazer agora, o que acontece depois.',
        },
        {
          type: 'paragraph',
          text: 'Decisão sobre o design system: construí no sistema legado do PicPay intencionalmente — velocidade de entrega pesou mais que perfeição técnica.',
        },
        {
          type: 'table',
          headers: ['Antes — Lógica do produto', 'Depois — Lógica do uso'],
          rows: [
            ['Usar assistência', 'Consulta online'],
            ['Acionar seguro', 'Consulta presencial'],
            ['Beneficiários do seguro', 'Desconto farmácia'],
            ['Mais opções', 'Dependentes'],
          ],
        },
        {
          type: 'image',
          src: '/cases/assistencia-saude/IS-TOBE-hub.png',
          caption: 'Hub de pós-venda — da lógica do produto para a lógica do uso',
        },
        {
          type: 'image',
          src: '/cases/assistencia-saude/IS-TOBE-Beneficios.png',
          caption: 'Benefícios — cada um com contexto de uso claro',
        },
      ],
    },
    {
      heading: '"Não apresentei dados. Fiz o time ver o problema."',
      blocks: [
        {
          type: 'paragraph',
          text: 'A mudança de direção foi resultado de um processo deliberado de construção de evidência compartilhada. Mapeei quem precisava ser influenciado e o que movia cada um:',
        },
        {
          type: 'stakeholder-list',
          stakeholders: [
            { role: 'PM', approach: 'Precisava ser parceira → aproximei desde o início do processo' },
            { role: 'GPM', approach: 'Precisava de fatos e rigor → a guerrilha foi o que tornou o investimento justificável' },
            { role: 'Liderança cética', approach: 'Precisava ver ao vivo → convidei para observar as sessões. Quando viu as dúvidas dos usuários em tempo real, a posição mudou' },
            { role: 'CTO', approach: 'Questionou a priorização → a resposta foi o material completo, da guerrilha ao teste estruturado. Depois de ler, não havia mais questionamento' },
          ],
        },
        {
          type: 'paragraph',
          text: 'Além disso: as telas do pós-venda não tinham tracking. Aproveitei a janela de implementação para resolver isso — o que antes era uma tela sem rastreabilidade se tornou três telas separadas com tracking próprio.',
        },
      ],
    },
    {
      heading: '"Um driver identificado — e a decisão consciente de não agir agora."',
      blocks: [
        {
          type: 'paragraph',
          text: 'Durante o processo, identifiquei um segundo driver: baixa consciência de contratação. Usuários cancelavam sem saber que tinham o produto. Apresentei para os stakeholders — a decisão foi consciente: o modelo de entrada compensava financeiramente. Entrou em backlog como hipótese para ciclo futuro. A decisão de não agir foi informada, não omissa.',
        },
      ],
    },
    {
      blocks: [
        {
          type: 'paragraph',
          text: 'Aprendizados',
        },
        {
          type: 'learning-blocks',
          learnings: [
            {
              title: 'O processo não é linear — reconhecer isso em tempo real é uma habilidade.',
              text: 'O card sorting não estava no roteiro original. Decidi incluí-lo no meio do teste porque havia uma dúvida real que precisava de dado, não de suposição. Essa decisão mudou a interface.',
            },
            {
              title: 'A primeira versão é hipótese, não solução.',
              text: 'Cada camada de validação trouxe uma correção — guerrilha, card sorting, teste estruturado. Quem trata a primeira versão como solução fecha o ciclo cedo demais.',
            },
            {
              title: 'Influenciar não é apresentar — é fazer as pessoas verem.',
              text: 'Cada stakeholder precisava de uma abordagem diferente. Nenhuma foi igual. Todas foram intencionais.',
            },
          ],
        },
      ],
    },
  ],
  metrics: [
    {
      value: '↓ 0,97 p.p.',
      description: 'Redução de churn em relação ao patamar inicial de 16%',
    },
    {
      value: '~5 mil',
      description: 'Apólices preservadas, equivalente a R$50k em receita',
    },
    {
      value: '100%',
      description: 'Das dores mapeadas na guerrilha foram sanadas na nova interface',
    },
  ],
  metricsNote:
    'Não é possível atribuir integralmente esse resultado às mudanças — múltiplas variáveis envolvidas. Duas evidências sustentam a correlação: quantitativa (a redução coincidiu com as mudanças implementadas) e qualitativa (todas as dores mapeadas foram sanadas no teste estruturado).',
}

export default assistenciaSaude
