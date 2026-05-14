# CLAUDE.md — Seu Projeto DZA

<!--
═══════════════════════════════════════════════════════════════════
  💡 EXPLICAÇÃO PRA VOCÊ (não apague — leia, edite o resto):

  Este arquivo é o "manual da empresa" pro Claude Code.

  TODA VEZ que você abrir `claude` nesta pasta, ele lê este arquivo
  ANTES de qualquer conversa. É o briefing permanente que ele recebe.

  Pense como: "manual do funcionário novo na empresa". Sem isso,
  ele responde genérico. Com isso, ele responde como se conhecesse
  seu negócio.

  EDITE este arquivo conforme seu projeto evolui. Quanto mais
  preciso e atualizado, melhor o agente vai te ajudar.

  📚 Refresher (do que você aprendeu no D1):
  - Lembra B.5 (Engenharia de Contexto)? Isso aqui é a aplicação.
  - Lembra a demo "antes/depois CLAUDE.md"? Você acabou de receber
    um CLAUDE.md "preenchido" — agora você adapta pro seu negócio.
═══════════════════════════════════════════════════════════════════
-->

**Última atualização:** [coloque a data quando editar]
**Projeto:** [nome da sua empresa/produto]
**Stack principal:** [ex: Next.js + Supabase + Vercel]

---

## Sobre este projeto

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Claude lê isso primeiro e entende: "ah, é um e-commerce de X" ou
  "consultoria patrimonial pra alta renda" ou "agência de marketing".
  Sem essa âncora inicial, ele assume coisas genéricas.

  ESCREVA EM 3-5 LINHAS o que sua empresa faz, pra quem, e qual é
  o problema central que ela resolve.
-->

[Escreva aqui]

Exemplo (apague depois):

> Sou consultor patrimonial pra alta renda (médicos, advogados,
> empresários). Ajudo construir patrimônio de R$500k+ em 3 anos
> usando estruturação tributária + alavancagem imobiliária.
> Este projeto é o site da minha consultoria + agente que atende
> leads no Instagram (Roberta).

---

## Comandos do projeto

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Quando você pedir pra Claude "rode os testes" ou "faz o build",
  ele PRECISA saber qual comando. Sem essa lista, ele chuta
  (geralmente errado).

  ADICIONE conforme criar comandos. Comece com o essencial.
-->

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Testes (quando tiver)
npm test

# Deploy (quando configurar)
npm run deploy
```

<!--
  💡 Quando você criar SUA primeira skill, adicione aqui também:

  ```bash
  # Suas skills disponíveis
  /resumo-do-dia    # resumir atividade git de hoje
  /seu-comando      # descrição
  ```
-->

---

## Arquitetura

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Claude precisa saber ONDE as coisas moram. Sem isso, ele cria
  arquivo em lugar errado, importa de path errado, ignora padrões.

  COMECE SIMPLES — só descreva o que existe hoje. Cresce com o
  projeto.
-->

```
seu-projeto/
├── src/              # código principal
├── docs/             # documentação
├── .claude/          # configuração do Claude Code (skills, agents, hooks)
└── .env              # segredos — NUNCA commitado no git
```

**Stack:**
- [Backend] — ex: Node.js + Express
- [Frontend] — ex: React + Tailwind
- [Banco] — ex: PostgreSQL via Supabase
- [Deploy] — ex: Vercel

---

## Padrões do projeto

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  É aqui que vai a "voz da casa". Como vocês escrevem código,
  nomeiam variáveis, organizam pastas. Sem isso, Claude cria
  no padrão dele (que pode não bater com o seu).
-->

[Edite conforme seus padrões]

Exemplos:
- **Nomes de arquivos:** kebab-case (`minha-funcao.ts`, não `MinhaFuncao.ts`)
- **Imports:** sempre absolutos (`@/lib/x`), nunca relativos longos (`../../../lib/x`)
- **Funções:** explícitas com tipos TypeScript, evitar `any`
- **Comentários:** só pra "por que", nunca pra "o que" (o código já diz o quê)

---

## Integrações externas

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Liste APIs e serviços que seu projeto usa. Claude vai consultar
  isso quando precisar conectar com eles.

  As chaves dessas integrações ficam no `.env`. Aqui só ficam os
  NOMES e PROPÓSITOS.
-->

[Adicione conforme integrar]

Exemplos:
- **Anthropic API** — pra agentes/skills (chave em `.env`)
- **Supabase** — banco de dados (URL + chave em `.env`)
- **Stripe** — pagamentos (chaves em `.env`)
- **Resend** — emails transacionais (chave em `.env`)

---

## Gotchas (armadilhas conhecidas)

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO — MAIS IMPORTANTE QUE VOCÊ IMAGINA:
  Aqui é onde vocês acumulam "lições aprendidas". Toda vez que algo
  quebrar de um jeito não-óbvio, anote aqui.

  Em 6 meses, isso vai estar com 20 itens. Em 1 ano, 50. Cada item
  é uma armadilha que NUNCA mais vai pegar você ou seu agente de
  surpresa.

  Comece com 0. Adicione conforme aprender.
-->

[Adicione conforme descobrir]

Exemplos do que entra aqui:
- ⚠️ Erro X só acontece quando vocês fazem Y. Solução: Z.
- ⚠️ Biblioteca A tem comportamento estranho em versão B. Fix: usar C.
- ⚠️ Setup local Mac M1 precisa de configuração extra (link doc).

---

## Skills disponíveis

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Conforme você criar skills, liste aqui pra Claude saber que
  existem (e pra você lembrar).

  Cada skill mora em `.claude/skills/<nome>/SKILL.md`.
-->

| Skill | O que faz | Quando usar |
|---|---|---|
| `/resumo-do-dia` | Resume atividade git de hoje + flagga riscos | Sempre que quiser saber o que mudou |

<!-- Adicione mais conforme criar -->

---

## Subagents disponíveis

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Lista de "especialistas IA" que vocês criaram. Claude consulta
  pra decidir quando delegar.

  Cada subagent mora em `.claude/agents/<nome>.md`.
-->

| Subagent | Especialidade |
|---|---|
| `revisor-conteudo` | Revisa qualquer texto por clareza, ritmo, brand voice |

<!-- Adicione mais conforme criar -->

---

## MCPs configurados

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  MCPs são as "portas pro mundo externo" do Claude (banco, web,
  GitHub, etc). Lista o que tá configurado em `.mcp.json`.
-->

| MCP | Status | O que conecta |
|---|---|---|
| `context7` | ✅ ativo | Docs atualizadas de bibliotecas (anti-hallucination) |
| `brave-search` | ✅ ativo | Pesquisa web em tempo real |
| `filesystem` | ⚙️ desabilitado por default | Acesso a pastas específicas. Habilite em `.mcp.json` ajustando paths pro seu username |

<!-- Adicione conforme instalar -->

---

## Hooks ativos

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO:
  Hooks são automações que disparam sozinhas em eventos. Lista
  os que estão configurados em `.claude/hooks/hooks.json`.
-->

| Evento | O que dispara |
|---|---|
| `SessionStart` | Injeta lembrete da brand voice no início de cada sessão |

<!-- Adicione conforme criar -->

---

## Operational Lessons

<!--
  💡 POR QUE EXISTE ESTA SEÇÃO — VALIOSA NO LONGO PRAZO:
  Toda vez que vocês passarem por incidente (bug em prod, decisão
  difícil, refatoração custosa), anote o que aprenderam.

  Diferente de "Gotchas" (armadilhas técnicas), aqui são lições
  ESTRATÉGICAS sobre como o negócio funciona.

  Esse é o caderno que vai te diferenciar em 1 ano. Promise.
-->

[Adicione conforme aprender]

Exemplos:
- 📚 Cliente A teve problema X — descobrimos que Y é o real motor.
- 📚 Lançamento de Z falhou — lição: testar W antes na próxima.

---

## Como usar este arquivo

<!--
  💡 INSTRUÇÕES FINAIS — apague quando entender:

  1. Edite TODAS as seções acima com info do seu projeto/negócio
  2. Apague os comentários HTML (entre <!-- e -->)
  3. Apague os "Exemplos" depois de substituir pelo seu conteúdo
  4. Commit este arquivo no git (ele NÃO é segredo — é doc pública
     do seu projeto)
  5. Atualize a "Última atualização" lá no topo
  6. Volte aqui regularmente conforme projeto cresce

  Quanto mais específico este arquivo, melhor o Claude trabalha
  com você. Tempo investido aqui = compostos em produtividade.
-->
