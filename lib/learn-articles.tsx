import type { ReactNode } from "react"

export type LearnArticle = {
  slug: string
  title: string
  summary: string
  /** Featured in "Comece por aqui" (max 3) */
  featured?: boolean
  body: ReactNode
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
}
function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-xl font-semibold text-gray-900 mt-8 mb-3">
      {children}
    </h2>
  )
}
function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
}
function Li({ children }: { children: ReactNode }) {
  return <li>{children}</li>
}

export const LEARN_ARTICLES: LearnArticle[] = [
  {
    slug: "meta-semanal-metodo-simples",
    title: "Meta semanal: o método mais simples para controlar gasto",
    summary:
      "Como transformar uma meta mensal em decisões semanais simples, sem planilha e sem culpa.",
    featured: true,
    body: (
      <>
        <P>
          A maioria das pessoas define um teto mensal e só descobre que estourou
          quando a fatura chega. A meta semanal inverte isso: você acompanha o
          ritmo a cada sete dias e ajusta antes do estrago.
        </P>
        <H2>O problema em linguagem humana</H2>
        <P>
          Um número grande no mês parece distante. Gastos pequenos se somam sem
          você perceber, e no dia 25 o cartão já não fecha. A meta semanal
          quebra o mês em blocos que você consegue enxergar e controlar.
        </P>
        <H2>O método (passos claros)</H2>
        <Ul>
          <Li>Defina quanto quer gastar no mês (ex.: R$ 4.000).</Li>
          <Li>Divida pelas semanas (ex.: 4 semanas → R$ 1.000/semana).</Li>
          <Li>Acompanhe diariamente ou a cada 2–3 dias.</Li>
          <Li>Se uma semana passar, compense na seguinte.</Li>
        </Ul>
        <H2>Erros comuns</H2>
        <Ul>
          <Li>Colocar meta irreal e desistir.</Li>
          <Li>Ignorar semanas com 5 domingos ou meses curtos.</Li>
          <Li>Não revisar no meio da semana.</Li>
        </Ul>
        <P>
          Comece com um número que caiba na sua vida. Ajuste com o tempo. O
          importante é enxergar cedo.
        </P>
      </>
    ),
  },
  {
    slug: "parar-estourar-cartao-ate-dia-20",
    title: "Como parar de estourar o cartão até o dia 20",
    summary:
      "Um checklist prático para entender gatilhos, criar limites e corrigir rota antes do estrago.",
    featured: true,
    body: (
      <>
        <P>
          Se todo mês o cartão estoura antes do fim, o problema não é só o
          valor: é o ritmo. Este texto traz um checklist para você identificar
          gatilhos e criar um limite semanal que evite o estouro.
        </P>
        <H2>O problema</H2>
        <P>
          Gastos concentrados na primeira quinzena, compras por impulso e
          assinaturas que somam sem você notar. Até o dia 20 não sobra margem.
        </P>
        <H2>O método</H2>
        <Ul>
          <Li>Anote por uma semana onde o dinheiro vai (sem julgar).</Li>
          <Li>Identifique os 3 maiores gatilhos (ex.: delivery, compras online).</Li>
          <Li>Defina um teto semanal e acompanhe no app.</Li>
          <Li>Revise no meio da semana e corte um item se estiver passando.</Li>
        </Ul>
        <H2>Erros comuns</H2>
        <Ul>
          <Li>Fazer dieta radical e abandonar em 2 semanas.</Li>
          <Li>Não separar cartão de débito e se confundir com o saldo.</Li>
        </Ul>
        <P>
          Pequenos ajustes semanais funcionam melhor que um grande corte mensal.
        </P>
      </>
    ),
  },
  {
    slug: "open-finance-seguro",
    title: "O que é Open Finance e por que é seguro",
    summary:
      "Explicação sem juridiquês, com foco em controle e segurança.",
    featured: true,
    body: (
      <>
        <P>
          Open Finance é o padrão que permite que você autorize um app a ler
          dados da sua conta (como transações) para te dar serviços melhores.
          Você decide o que compartilhar e pode revogar quando quiser.
        </P>
        <H2>Por que é seguro</H2>
        <P>
          A conexão é feita direto entre você e seu banco, com consentimento
          explícito. O app não guarda sua senha. Você pode ver e revogar
          permissões a qualquer momento no banco ou no app.
        </P>
        <H2>O que a Banzai acessa</H2>
        <P>
          Só o necessário para organizar gastos: transações e descrições. Não
          movimentamos dinheiro, não fazemos Pix nem vendemos dados.
        </P>
        <P>
          Quer aplicar isso sem planilha? Use a Banzai e acompanhe por semana.
        </P>
      </>
    ),
  },
  {
    slug: "vazamentos-invisiveis",
    title: "Vazamentos invisíveis: assinaturas, delivery e pequenos impulsos",
    summary:
      "Onde o dinheiro some sem você perceber, e como cortar sem sentir que está se punindo.",
    body: (
      <>
        <P>
          Pequenos gastos recorrentes e impulsos somam centenas por mês. Este
          artigo mostra onde o dinheiro some e como reduzir sem privação.
        </P>
        <H2>O problema</H2>
        <P>
          Assinaturas (streaming, apps, academia), delivery e compras por impulso
          aparecem como valores baixos, mas no fim do mês representam uma fatia
          grande do orçamento.
        </P>
        <H2>O método</H2>
        <Ul>
          <Li>Liste todas as assinaturas e cancele as que não usa.</Li>
          <Li>Defina um teto semanal para delivery e respeite.</Li>
          <Li>Espere 24h antes de compras não planejadas.</Li>
        </Ul>
        <P>
          Cortar 10–20% desses vazamentos já abre espaço sem mudar o resto da
          vida.
        </P>
      </>
    ),
  },
  {
    slug: "cartao-vs-debito",
    title: "Cartão vs débito: como enxergar o gasto de verdade",
    summary:
      "Como consolidar gastos e não se enganar com “não saiu da conta ainda”.",
    body: (
      <>
        <P>
          No débito o dinheiro sai na hora; no cartão, só na fatura. Misturar os
          dois sem organização gera a sensação de que “ainda tem dinheiro” quando
          na verdade o comprometido já passou do limite.
        </P>
        <H2>O método</H2>
        <P>
          Trate cartão e débito no mesmo lugar: some gastos da semana (e do
          mês) e compare com sua meta. A Banzai ajuda a evitar duplicidade entre
          compra no cartão e pagamento da fatura.
        </P>
        <P>
          Assim você enxerga o gasto real, não só o que “saiu da conta”.
        </P>
      </>
    ),
  },
  {
    slug: "teto-semanal-realista",
    title: "Como criar um teto semanal que cabe na sua vida",
    summary:
      "Um método para definir um número realista e ajustar sem abandonar o processo.",
    body: (
      <>
        <P>
          Teto semanal não é sobre apertar até doer: é sobre um número que você
          consiga seguir e revisar. Este texto traz um jeito simples de achar
          esse número.
        </P>
        <H2>O método</H2>
        <Ul>
          <Li>Olhe os últimos 3 meses e veja quanto gastou em média.</Li>
          <Li>Defina uma meta 10–15% menor (ou igual, no início).</Li>
          <Li>Divida pelas semanas do mês (use 4 ou 4,33).</Li>
          <Li>Ajuste após 2–3 semanas com base no que funcionou.</Li>
        </Ul>
        <P>
          Se errar uma semana, não desista: compense na seguinte. O hábito vale
          mais que o número perfeito.
        </P>
      </>
    ),
  },
  {
    slug: "open-finance-revogar",
    title: "Open Finance: o que é, como funciona e como revogar acesso",
    summary:
      "Explicação sem juridiquês, com foco em controle e segurança.",
    body: (
      <>
        <P>
          Open Finance é o padrão regulado pelo Banco Central que permite
          compartilhar dados financeiros com apps autorizados, com seu
          consentimento. Você escolhe o que compartilhar e pode revogar quando
          quiser.
        </P>
        <H2>Como revogar</H2>
        <P>
          No app do banco ou no site, procure por “Open Finance” ou “Compartilhamento
          de dados” e cancele o acesso do app. Na Banzai você também pode
          desconectar instituições pelas configurações.
        </P>
        <P>
          Revogar não apaga o histórico que o app já processou; para isso,
          solicite exclusão de dados conforme a política de privacidade.
        </P>
      </>
    ),
  },
  {
    slug: "categorizar-sem-planilha",
    title: "Como categorizar gastos sem virar refém de planilha",
    summary:
      "Categorias simples, consistentes e úteis, com exemplos.",
    body: (
      <>
        <P>
          Categorias demais viram bagunça; de menos, não ajudam. O ideal é um
          meio-termo: poucas categorias que você realmente usa para decidir.
        </P>
        <H2>Exemplos práticos</H2>
        <Ul>
          <Li>Alimentação (supermercado + delivery + restaurante).</Li>
          <Li>Transporte (combustível, apps, manutenção).</Li>
          <Li>Moradia (aluguel, condomínio, contas).</Li>
          <Li>Lazer e assinaturas.</Li>
          <Li>Outros (tudo que não encaixa).</Li>
        </Ul>
        <P>
          A Banzai sugere categorias automaticamente; você pode ajustar quando
          fizer sentido. O importante é manter consistência para comparar
          semanas e meses.
        </P>
      </>
    ),
  },
  {
    slug: "ritual-5-minutos-domingo",
    title: "O ritual de 5 minutos no domingo que muda o mês inteiro",
    summary:
      "Rotina curta para revisar a semana, ajustar metas e começar bem.",
    body: (
      <>
        <P>
          Cinco minutos no domingo para olhar a semana que passou e a que vem
          evitam surpresas no fim do mês. Sem planilha, sem culpa.
        </P>
        <H2>O ritual</H2>
        <Ul>
          <Li>Abra o app e veja o resumo da semana.</Li>
          <Li>Qual categoria puxou? Dá para cortar algo na próxima?</Li>
          <Li>Ajuste a meta da próxima semana se precisar.</Li>
          <Li>Feche o app e curta o domingo.</Li>
        </Ul>
        <P>
          Ritual curto e consistente vale mais que uma análise longa uma vez por
          mês.
        </P>
      </>
    ),
  },
  {
    slug: "top-3-gastos-semana",
    title: "Como identificar seus top 3 gastos da semana",
    summary:
      "A regra dos 3 para priorizar o que realmente vale atacar.",
    body: (
      <>
        <P>
          Em vez de tentar controlar tudo, foque nos 3 gastos (ou categorias)
          que mais puxaram o orçamento na semana. São eles que fazem a diferença.
        </P>
        <H2>O método</H2>
        <P>
          Toda semana, olhe o resumo e anote os 3 maiores. Se forem sempre os
          mesmos, vale criar um limite ou regra só para eles. Se mudarem, você
          está enxergando padrões.
        </P>
        <P>
          A Banzai mostra categorias e top transações para você decidir onde
          atacar primeiro.
        </P>
      </>
    ),
  },
  {
    slug: "cortar-10porcento-sem-sofrer",
    title: "Como cortar 10% do gasto sem sofrer",
    summary:
      "Estratégias de corte inteligente, focadas em vazamentos e não em privação.",
    body: (
      <>
        <P>
          Cortar 10% do gasto não precisa ser sinônimo de deixar de viver. O
          segredo é atacar vazamentos e pequenos excessos, não o que realmente
          importa.
        </P>
        <H2>Onde cortar primeiro</H2>
        <Ul>
          <Li>Assinaturas não usadas.</Li>
          <Li>Delivery (reduzir frequência ou valor médio).</Li>
          <Li>Compras por impulso (regra das 24h).</Li>
          <Li>Pequenos gastos recorrentes (café, lanches).</Li>
        </Ul>
        <P>
          Mantenha lazer e coisas que te fazem bem; ajuste o resto. Dez por
          cento em um mês já abre margem para respirar.
        </P>
      </>
    ),
  },
]

const FEATURED_SLUGS = LEARN_ARTICLES.filter((a) => a.featured).map((a) => a.slug)
export const FEATURED_ARTICLES = LEARN_ARTICLES.filter((a) => a.featured)
export const ALL_SLUGS = LEARN_ARTICLES.map((a) => a.slug)
export function getArticle(slug: string): LearnArticle | undefined {
  return LEARN_ARTICLES.find((a) => a.slug === slug)
}
