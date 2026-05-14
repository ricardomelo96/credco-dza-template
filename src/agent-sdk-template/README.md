# Agent SDK Template — Anatomia Enxuta

> **Template pedagógico** mostrando como Agent SDK app funciona POR DENTRO.
> Mantém-se simples deliberadamente — propósito é didático.

Você vai usar esse template no **Bloco E do D2** pra adaptar pro seu caso.

---

## Mapeamento: 4 caixas do B.4 → arquivos deste template

| Caixa do B.4 | Arquivo | O que faz |
|---|---|---|
| **PERSONA** (DNA do agente) | `knowledge/persona.md` | System prompt — quem o agente é, como age |
| **TOOLS** (ações no mundo) | `tools.ts` | Lista de tools + handlers que executam |
| **KNOWLEDGE** (saber dinâmico) | `knowledge/persona.md` (mesmo arquivo) | Markdown carregado como contexto |
| **LOOP** (think → act → observe) | `agent.ts` | While loop com chamada Anthropic + decisão tool/end_turn |

---

## Estrutura

```
agent-sdk-template/
├── agent.ts                ← CAIXA 4: LOOP explícito (think → act → observe)
├── tools.ts                ← CAIXA 2: TOOLS (2 exemplos: salvar_resumo, contar_palavras)
├── knowledge/
│   └── persona.md          ← CAIXAS 1+3: PERSONA + KNOWLEDGE (markdown)
├── package.json
├── tsconfig.json
├── output/                 ← (criado em runtime) onde resumos salvos vão
└── README.md
```

---

## Pra rodar

```bash
# 1. Na RAIZ do repo (não nesta pasta), copia .env.example pra .env
cd ../..
cp .env.example .env

# 2. Edita .env e adiciona sua ANTHROPIC_API_KEY
nano .env   # ou: code .env / open .env

# 3. Volta pra esta pasta e instala dependências
cd src/agent-sdk-template
npm install

# 4. Roda o agente com input padrão (reunião de exemplo embutida)
npm run agent

# 5. Ou roda com seu próprio input
npx tsx agent.ts "Resuma essa reunião: João disse..."
```

## O que esperar quando rodar

```
📥 Input recebido: Resuma essa reunião: PARTICIPANTES: João (CEO)...

🧠 Iteração 1 — Think...
🛠️  Tool chamada: contar_palavras
   Input: { ... }
✅ Tool result: { count: 87, ... }

🧠 Iteração 2 — Think...
🛠️  Tool chamada: salvar_resumo
   Input: { titulo: "...", resumo: "..." }
✅ Tool result: { success: true, path: "./output/..." }

🧠 Iteração 3 — Think...

💬 Agente:
[resumo formatado em markdown]

✓ Loop encerrou após 3 iteração(ões)
```

**Reparem:** o agente DECIDE quando usar tools, quantas iterações faz, quando parar. Você só dá o input — ele orquestra.

---

## Como adaptar pro SEU caso

### 1. Mude a persona

Abra `knowledge/persona.md` e reescreva:
- Quem o agente é (deixa de ser "Resumidor de Reuniões")
- Como ele formata output
- Quais regras ele segue

### 2. Adicione/troque tools

Em `tools.ts`:
- Adiciona nova entry no array `TOOLS` (schema + description)
- Adiciona case no `executeTool` (handler real)

Exemplos de tools úteis:
- `enviar_email` (via Resend / SendGrid)
- `buscar_no_banco` (via Supabase)
- `criar_tarefa_notion` (via Notion API)
- `postar_slack` (via webhook)
- `consultar_calendar` (via Google Calendar API)

### 3. Loop é universal — quase nunca mexe

Pra **99% dos casos**, o `agent.ts` funciona como tá. Só mexe se precisar de:
- Múltiplos modelos (Haiku pra triagem + Opus pra resposta)
- Streaming (resposta token-por-token visível)
- Persistência (gravar histórico em banco)

Tudo isso entra DEPOIS quando o caso pedir.

---

## Próximo nível: produção 24/7

Este template roda **local**. Pra agente rodar em produção:

| Capacidade | Como adicionar |
|---|---|
| Rodar 24/7 sem você | Deploy em Vercel/Railway/Lambda |
| Receber webhooks (IG, WhatsApp, etc) | Webhook endpoint → chama `agentLoop()` |
| Persistir conversas | Supabase / Postgres + tabela `messages` |
| Observabilidade | Logs estruturados + Sentry + dashboards |
| Múltiplos usuários simultâneos | Queue (Bull/BullMQ) + rate limiting |

Isso é **território de mentoria**. Comecem dominando o local.

---

## Troubleshooting

### "ANTHROPIC_API_KEY undefined"

→ Você não criou o `.env` na RAIZ do repo, ou esqueceu de adicionar a chave.

### "Cannot find module '@anthropic-ai/sdk'"

→ Esqueceu `npm install` nesta pasta.

### "Tool result veio undefined"

→ Bug no handler do `tools.ts`. Loga o input pra debugar: `console.log('Tool input:', input)`.

### Loop não para

→ Safety: tem `iteration < 10` no while. Se passar disso, ajusta a persona pra ser mais decisivo sobre quando parar.

---

> 💡 **Dica final do Ricardo:** mantenham este template **simples**.
> Quando ficar tentado a "adicionar mais uma camada", pergunta:
> "isso é pedagogia ou over-engineering?" 9 de 10 vezes é o segundo.
> Produção tem espaço pra complexidade. Template não.
