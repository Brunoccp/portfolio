export type BlockType =
  | 'paragraph'
  | 'paragraph-em'
  | 'section-label'
  | 'blockquote'
  | 'list'
  | 'numbered-list'
  | 'image'
  | 'image-grid'
  | 'table'
  | 'hypothesis-list'
  | 'learning-blocks'
  | 'stakeholder-list'
  | 'research-timeline'
  | 'before-after'

export interface ImageItem {
  src: string
  caption?: string
}

export interface Hypothesis {
  hypothesis: string
  detail?: string
  result: 'Validada' | 'Refutada'
}

export interface Learning {
  title: string
  text: string
}

export interface Stakeholder {
  role: string
  approach: string
  quote?: string
}

export interface NumberedItem {
  title: string
  description?: string
}

export interface ResearchStep {
  label: string
  deadline: string
}

export interface BeforeAfterPair {
  label: string
  before: { src: string; caption: string }
  after: { src: string; caption: string }
}

export interface ContentBlock {
  type: BlockType
  text?: string
  attribution?: string
  items?: string[] | NumberedItem[]
  src?: string
  caption?: string
  images?: ImageItem[]
  layout?: string
  headers?: string[]
  rows?: string[][]
  hypotheses?: Hypothesis[]
  learnings?: Learning[]
  stakeholders?: Stakeholder[]
  // research-timeline
  duration?: string
  objective?: string
  steps?: ResearchStep[]
  // before-after
  pairs?: BeforeAfterPair[]
}

export interface CaseSection {
  id: string
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
  title: 'O problema não era churn.\nEra percepção de valor.',
  heroImage: '/cases/assistencia-saude/IS-TOBE-hub.png',
  heroImageAlt: 'Hub de pós-venda — da lógica do produto para a lógica do uso',
  summary: [
    {
      label: 'Challenge',
      text: 'Produto de assistência saúde com 16% de churn. O time buscava soluções de retenção enquanto o problema real estava na experiência de pós-venda.',
    },
    {
      label: 'Strategy',
      text: 'Redefini o problema: churn era sintoma de desalinhamento entre promessa e uso. Validei em duas camadas antes de propor qualquer solução.',
    },
    {
      label: 'Results',
      text: 'Redução de 0,97 p.p., ~5 mil apólices e R$50k em receita preservados. Tracking implementado onde antes havia ausência total de dado.',
    },
  ],
  sections: [
    {
      id: 'contexto',
      blocks: [
        {
          type: 'paragraph',
          text: 'Produto de baixo ticket com dois planos: R$3,80 (telemedicina) e R$10,80 (telemedicina + desconto farmácia + consultas presenciais). Distribuído via app com contratação em um clique e primeiro mês grátis. O modelo facilitava a entrada mas reduzia o nível de consciência na decisão de contratação.',
        },
      ],
    },
    {
      id: 'causa-raiz',
      heading: '"O time via retenção. Eu via a causa raiz."',
      blocks: [
        {
          type: 'paragraph',
          text: 'O time tratava churn como o principal problema e buscava soluções de retenção — uma abordagem que atuava apenas no final da jornada. Minha leitura foi diferente: o churn não era a causa, era a consequência de um desalinhamento entre a promessa de valor comunicada na oferta e a experiência entregue no pós-venda.',
        },
        {
          type: 'paragraph',
          text: 'Como cheguei nessa leitura: entrei no produto sem histórico — esse distanciamento foi uma vantagem. Ao navegar pelo pós-venda pela primeira vez, minha reação imediata foi: "qual é a proposta de valor desse produto?" Contratei o produto e tentei usar cada benefício. Tive dificuldades reais. Isso confirmou que havia algo estruturalmente errado.',
        },
      ],
    },
    {
      id: 'pesquisa',
      heading: '"Primeiro a direção, depois o investimento."',
      blocks: [
        {
          type: 'section-label',
          text: 'Camada 1 — Guerrilha · 5 usuários',
        },
        {
          type: 'paragraph',
          text: 'Abordei 5 pessoas com perfil de cliente PicPay e observei enquanto navegavam pela jornada no meu celular. Objetivo: testar hipóteses específicas — não exploração aberta.',
        },
        {
          type: 'blockquote',
          text: 'Onde eu acho meu desconto farmácia? Achei que teria algum cupom aqui pra usar na farmácia.',
          attribution: 'Usuário durante guerrilha',
        },
        {
          type: 'blockquote',
          text: 'Acionar seguro — isso é para caso eu tenha problemas na minha telemedicina?',
          attribution: 'Usuário durante guerrilha',
        },
        {
          type: 'hypothesis-list',
          hypotheses: [
            {
              hypothesis: 'O pós-venda é confuso?',
              detail: 'Validada. Todos associaram "acionar seguro" à telemedicina.',
              result: 'Validada',
            },
            {
              hypothesis: 'O desconto farmácia é fácil de acessar?',
              detail: 'Validada como dor. Nenhum usuário encontrou.',
              result: 'Validada',
            },
            {
              hypothesis: '"Beneficiário" e "dependente" geram confusão?',
              detail: 'Validada. Nenhum distinguiu os dois conceitos.',
              result: 'Validada',
            },
            {
              hypothesis: 'Contratam o plano caro porque vem selecionado?',
              detail: 'Refutada. Contratam pelo valor percebido no desconto farmácia.',
              result: 'Refutada',
            },
            {
              hypothesis: 'Diferencia "usar assistência" de "acionar seguro"?',
              detail: 'Refutada. 4 dos 5 testaram botões aleatoriamente.',
              result: 'Refutada',
            },
          ],
        },
        {
          type: 'image-grid',
          layout: '3col-mosaic',
          images: [
            {
              src: '/cases/assistencia-saude/roteiro-guerrilha.jpg',
              caption: 'Roteiro de hipóteses',
            },
            {
              src: '/cases/assistencia-saude/notas-guerrilha.png',
              caption: 'Anotações ao vivo',
            },
            {
              src: '/cases/assistencia-saude/persona1.png',
              caption: 'Produto atual durante teste',
            },
            {
              src: '/cases/assistencia-saude/persona2.png',
              caption: 'Perfil participante',
            },
            {
              src: '/cases/assistencia-saude/persona3.png',
              caption: 'Perfil participante',
            },
          ],
        },
        {
          type: 'section-label',
          text: 'Camada 2 — Pesquisa Estruturada · 10 participantes',
        },
        {
          type: 'paragraph',
          text: 'Com os sinais da guerrilha, apresentei para GPM, Head de Produto e PM. O time aprovou um plano de 20 dias com três camadas sequenciais.',
        },
        {
          type: 'research-timeline',
          duration: '~20 dias',
          objective: 'Identificar oportunidades de melhoria na jornada de contratação e uso do produto.',
          steps: [
            { label: 'Processo exploratório', deadline: '—' },
            { label: 'Proposta de melhoria (UI)', deadline: '17/02 a 18/02' },
            { label: 'Recrutamento para teste', deadline: '20/02 a 21/02' },
            { label: 'Teste de usabilidade + Card sorting', deadline: '24/02 a 27/02' },
            { label: 'Report de pesquisa', deadline: '28/02' },
          ],
        },
        {
          type: 'numbered-list',
          items: [
            {
              title: 'Produto atual — ampliar a amostra',
              description:
                'Garantir que os problemas não eram artefato do teste anterior. Aumentar a base de evidência antes de propor solução.',
            },
            {
              title: 'Card sorting — hierarquia definida por comportamento real',
              description:
                'Entreguei cards com informações do pós-venda e pedi que os participantes organizassem da forma que fizesse mais sentido. 80% priorizaram consultas e desconto farmácia no topo. "Consulta online" venceu "telemedicina". Essas escolhas foram diretamente para a interface — não como sugestão, como decisão de produto.',
            },
            {
              title: 'Nova proposta — as mesmas tarefas que haviam falhado',
              description:
                'Participantes realizaram as mesmas tarefas do produto atual na nova interface. Encontraram o desconto farmácia. Conseguiram iniciar a telemedicina. Navegaram sem as dúvidas anteriores. O teste não apenas diagnosticou — validou que a solução funcionava.',
            },
          ] as NumberedItem[],
        },
        {
          type: 'image-grid',
          layout: '3col-mosaic',
          images: [
            {
              src: '/cases/assistencia-saude/Plano de pesquisa.png',
              caption: 'Plano aprovado pela liderança',
            },
            {
              src: '/cases/assistencia-saude/card-sorting.jpeg',
              caption: 'Card sorting — sessão',
            },
            {
              src: '/cases/assistencia-saude/card-sorting7.jpeg',
              caption: 'Resultado final',
            },
            {
              src: '/cases/assistencia-saude/Teste-Estruturado.jpeg',
              caption: 'Sessão presencial',
            },
            {
              src: '/cases/assistencia-saude/Teste-Estruturado2.png',
              caption: 'Participante navegando',
            },
          ],
        },
      ],
    },
    {
      id: 'decisao',
      heading: '"Não foi um redesign. Foi uma decisão sobre o que era possível mudar."',
      blocks: [
        {
          type: 'paragraph',
          text: 'O produto operava com processos definidos pela seguradora parceira: desconto farmácia fora da plataforma, telemedicina via WhatsApp, cadastro de dependentes por telefone. Partir dessa clareza evitou investimento em soluções inviáveis.',
        },
        {
          type: 'paragraph',
          text: 'A decisão estratégica: se não posso mudar o processo, garanto que o usuário sabe o que vai acontecer em cada etapa. O design system legado foi usado intencionalmente — velocidade pesou mais que perfeição técnica.',
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
          type: 'before-after',
          pairs: [
            {
              label: 'Hub de pós-venda',
              before: {
                src: '/cases/assistencia-saude/AS IS-Detalhes.png',
                caption: 'Organizado pela lógica do produto. O usuário precisava entender a estrutura interna para navegar.',
              },
              after: {
                src: '/cases/assistencia-saude/IS-TOBE-hub.png',
                caption: 'Reorganizado pela lógica do uso. Hierarquia definida pelo card sorting — não por opinião.',
              },
            },
            {
              label: 'Uso de benefícios',
              before: {
                src: '/cases/assistencia-saude/Desempenho-jornada atual.png',
                caption: 'Linguagem securitária. "Acionar seguro" confundido com acesso à telemedicina por 100% dos usuários.',
              },
              after: {
                src: '/cases/assistencia-saude/IS-TOBE-Beneficios.png',
                caption: 'Linguagem de saúde cotidiana. "Consulta online" venceu "telemedicina" no card sorting.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'influencia',
      heading: '"Não apresentei dados. Fiz o time ver o problema."',
      blocks: [
        {
          type: 'paragraph',
          text: 'A mudança de direção foi resultado de um processo deliberado de construção de evidência compartilhada. Mapeei quem precisava ser influenciado e o que movia cada um.',
        },
        {
          type: 'stakeholder-list',
          stakeholders: [
            {
              role: 'PM',
              approach:
                'Parceira desde o início. Precisava ser co-autora do processo, não destinatária de um relatório. Aproximei ela de cada etapa desde a guerrilha.',
            },
            {
              role: 'GPM',
              approach:
                'Fatos e rigor antes do investimento. A guerrilha foi o que tornou o plano de pesquisa justificável. Sem ela, não haveria aprovação.',
            },
            {
              role: 'Liderança Cética',
              approach:
                'Em vez de argumentar, convidei para ver. Quando viu as dúvidas dos usuários ao vivo, a posição mudou.',
              quote: 'Não havia dimensionado o quanto aquela agenda seria rica.',
            },
            {
              role: 'CTO',
              approach:
                'Evidência consolidada, sem intermediários. Questionou a priorização. A resposta foi o material completo — da guerrilha ao teste estruturado. Depois de ler, não havia mais questionamento.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'As telas do pós-venda não tinham tracking. Aproveitei a janela para resolver isso. O que antes era uma tela sem rastreabilidade se tornou três telas com tracking próprio — consulta online, consulta presencial e desconto farmácia. Isso não estava no escopo original.',
        },
      ],
    },
    {
      id: 'driver',
      heading: '"Um driver identificado — e a decisão consciente de não agir agora."',
      blocks: [
        {
          type: 'paragraph',
          text: 'Durante o processo, identifiquei um segundo driver: baixa consciência de contratação. Contratação em um clique + primeiro mês grátis gerava churn de usuários que cancelavam sem saber que tinham o produto.',
        },
        {
          type: 'paragraph',
          text: 'Apresentei para os stakeholders. A decisão foi consciente: o modelo de entrada compensava financeiramente. Entrou em backlog como hipótese para ciclo futuro. A decisão de não agir foi informada, não omissa.',
        },
      ],
    },
    {
      id: 'aprendizados',
      heading: 'Aprendizados',
      blocks: [
        {
          type: 'learning-blocks',
          learnings: [
            {
              title: 'O processo não é linear — reconhecer isso em tempo real é uma habilidade.',
              text: 'O card sorting não estava no roteiro original. Decidi incluí-lo no meio do teste porque havia uma dúvida real que precisava de dado, não de suposição. Essa decisão mudou a interface.',
            },
            {
              title: 'A primeira versão é hipótese, não solução.',
              text: 'Cada camada de validação trouxe uma correção. Os participantes chamavam o produto de "plano de saúde", não de assistência ou seguro. Quem fecha o ciclo cedo demais perde essas correções.',
            },
            {
              title: 'Influenciar não é apresentar — é fazer as pessoas verem.',
              text: 'Cada stakeholder precisava de uma abordagem diferente. A PM precisava ser parceira. O GPM precisava de rigor. O cético precisava ver ao vivo. A liderança precisava de evidência consolidada. Nenhuma abordagem foi igual. Todas foram intencionais.',
            },
          ],
        },
      ],
    },
  ],
  metrics: [
    {
      value: '↓ 0,97 p.p.',
      description: 'Redução de churn (de 16%)',
    },
    {
      value: '~5 mil',
      description: 'Apólices preservadas (R$50k em receita)',
    },
    {
      value: '100%',
      description: 'Das dores mapeadas na guerrilha foram sanadas na nova interface',
    },
  ],
  metricsNote:
    'Não é possível atribuir integralmente esse resultado às mudanças — múltiplas variáveis envolvidas. Duas evidências sustentam a correlação: quantitativa (redução coincidiu com as mudanças) e qualitativa (todas as dores mapeadas foram sanadas no teste estruturado).',
}

export default assistenciaSaude
