# credco-dza-template

> Template oficial do curso **Do Zero ao Agente — Credco**.
> Estrutura inicial pronta pra você começar a construir seus agentes IA com Claude Code.

---

## O que tem aqui

```
credco-dza-template/
├── CLAUDE.md                    ← Manual do projeto (briefing pro Claude)
├── .env.example                 ← Template das chaves (você renomeia pra .env)
├── .mcp.json                    ← MCPs essenciais pré-configurados
├── .claude/
│   ├── settings.json            ← Configuração do Claude Code
│   ├── skills/
│   │   ├── README.md            ← Como criar suas próprias skills
│   │   └── resumo-do-dia/       ← Skill exemplo (você modifica/copia)
│   ├── agents/
│   │   └── revisor-conteudo.md  ← Subagent exemplo
│   └── hooks/
│       └── hooks.json           ← Hooks pré-configurados (SessionStart)
└── docs/
    ├── PRIMEIROS-PASSOS.md      ← LEIA PRIMEIRO — guia passo a passo
    ├── agent-design-canvas.md   ← Template do canvas pro D2
    └── matriz-de-dores.md       ← Template do dever de casa
```

---

## Quick start (5 minutos)

```bash
# 1. Você já clonou? Se não:
git clone https://github.com/credco/credco-dza-template seu-projeto
cd seu-projeto

# 2. Copia o template de env pra um arquivo real
cp .env.example .env

# 3. Edita .env e adiciona sua chave Anthropic
#    (pegue em https://console.anthropic.com)
nano .env       # OU: code .env (VSCode) / open .env (Mac)

# 4. Abre Claude Code aqui
claude

# 5. Testa a skill exemplo
#    Dentro do Claude Code, digite:
/resumo-do-dia
```

Se rodou → **você tá pronto pro D2**. Sigla mental: **C-E-C-C-T** (Clone, Env, Chave, Claude, Teste).

---

## Documentação detalhada

📖 **`docs/PRIMEIROS-PASSOS.md`** — guia completo passo a passo (10 min de leitura)

🎯 **`CLAUDE.md`** — preencha com info do SEU negócio (item-chave pro Claude entender vocês)

⚒️ **`docs/agent-design-canvas.md`** — canvas que vocês vão preencher no D2

🩺 **`docs/matriz-de-dores.md`** — dever de casa entre D1 e D2 (3 dores × 4 dimensões)

---

## Próximos passos

1. ✅ **Setup feito?** Sim, se `/resumo-do-dia` funcionou
2. 📝 **Preencha `CLAUDE.md`** com info do seu negócio
3. 🧠 **Faça `docs/matriz-de-dores.md`** entre sábado-domingo
4. 🚀 **Domingo D2:** vocês constroem o primeiro agent de vocês

---

## Suporte

- **Documentação oficial:** [code.claude.com/docs](https://code.claude.com/docs)
- **Console Anthropic:** [console.anthropic.com](https://console.anthropic.com)
- **Pra dúvidas no curso:** chat do Meet (D1 e D2) + Q&A do D3 (Completos)

---

**Bons agentes 🤖**
*— Credco · DZA Edição 1 · Maio 2026*
