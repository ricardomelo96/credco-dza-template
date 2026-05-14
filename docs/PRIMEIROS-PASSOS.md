# Primeiros Passos — DZA Edição 1

> **Leitura: 10 minutos.** Faça do início ao fim — não pule etapas.
> Se travar em qualquer passo, **chame foto C ao seu lado** (D2) ou pergunte no chat do Meet.

---

## ✅ Pré-requisitos (antes do D1 sábado)

Verifique se você tem:

- [ ] **Macbook ou laptop Windows/Linux** (não dá pra fazer pelo celular)
- [ ] **Terminal aberto e funcionando** (Terminal.app no Mac / Windows Terminal / qualquer um)
- [ ] **Conta no console.anthropic.com** com cartão cadastrado e crédito (mín $5)
- [ ] **Node.js instalado** — `node --version` deve mostrar v18+ no terminal

Se algum item não tá pronto, resolve ANTES do sábado. Os primeiros 30min do D2 são pra construir — não pra instalar Node.

---

## Passo 1 — Instalar Claude Code

```bash
# No terminal:
npm install -g @anthropic-ai/claude-code

# Verificar:
claude --version
```

Se aparecer um número de versão (ex: `2.5.x`), tá funcionando.

**Se não funcionar:** abra issue no GitHub ou pergunte no chat do Meet.

---

## Passo 2 — Clonar este template

```bash
# Vá pra pasta onde você quer guardar seus projetos
cd ~/Documents      # ou onde preferir

# Clone o template (substitua URL pela final quando Ricardo passar)
git clone https://github.com/credco/credco-dza-template meu-primeiro-agente

# Entre na pasta
cd meu-primeiro-agente
```

**Sem git?** Instale:
- Mac: `xcode-select --install`
- Windows: [git-scm.com/download/win](https://git-scm.com/download/win)
- Linux: `sudo apt install git`

---

## Passo 3 — Login no Claude Code (OAuth)

Claude Code 2.x autentica via OAuth (mais simples que copiar API key). Primeira vez que você roda `claude`, ele abre o navegador automaticamente.

```bash
# Rode dentro da pasta do projeto
claude

# Se for primeira vez:
# - Vai abrir https://claude.ai no navegador
# - Faz login com sua conta Anthropic
# - Volta pro terminal — já tá autenticado
```

Pronto. Pra a maioria dos usos do Claude Code (skills, hooks, plugins), isso basta.

---

## Passo 3.5 — API key (SÓ se for usar Agent SDK no D2)

Você só precisa dessa parte se for rodar `src/agent-sdk-template/` no Bloco E do D2 (Agent SDK app autônomo).

```bash
# Copia o template
cp .env.example .env

# Edita
nano .env           # OU: code .env / open .env
```

Cole sua chave real:

```
ANTHROPIC_API_KEY=cole-sua-chave-completa-aqui
```

**Como pegar a chave:**

1. Acesse [console.anthropic.com](https://console.anthropic.com)
2. Menu **API Keys** → **Create Key**
3. Copia o código (só aparece UMA vez — guarde fora do projeto também)
4. Cola no `.env`
5. Salva

⚠️ **NUNCA** commit o `.env` no git. O `.gitignore` já protege — mas confira.

> 💡 **Diferença:** Claude Code (CLI) usa **OAuth via navegador**. Agent SDK (TypeScript app autônomo) usa **API key no `.env`**. Dois mecanismos pra dois usos diferentes — não confunda.

---

## Passo 4 — Rodar Claude Code

```bash
# Você ainda tá na pasta do projeto?
pwd
# Deve mostrar algo como: /Users/seunome/Documents/meu-primeiro-agente

# Roda Claude Code
claude
```

Você deve ver:
- Janela do Claude Code abrindo no terminal
- Input embaixo, conversa subindo
- Status bar no topo com modelo selecionado

**Se der erro:** confira que o `.env` tem a key correta e que `claude --version` retorna número.

---

## Passo 5 — Testar a skill exemplo

Dentro do Claude Code, digite:

```
/resumo-do-dia
```

Apertando Enter, Claude vai:
1. Rodar `git log` (mesmo que sem commits)
2. Rodar `git diff`
3. Resumir o que viu
4. Mostrar resposta

Se aparecer resposta (mesmo dizendo "sem atividade git hoje"), **funcionou**.

---

## Passo 6 — Preencher o CLAUDE.md

Esse é o passo **mais importante**. Você acabou de aprender em B.5 (Engenharia de Contexto): CLAUDE.md é o briefing permanente.

```bash
# Abre o CLAUDE.md
nano CLAUDE.md
# ou:
code CLAUDE.md
```

Substitua os placeholders `[Escreva aqui]` por info real do seu negócio. Foque nas seções:

- **Sobre este projeto** — quem você é, o que faz, pra quem
- **Comandos** — comandos do seu projeto (se tiver)
- **Padrões** — como você gosta de trabalhar
- **Integrações** — APIs que você usa

**Não precisa preencher tudo agora.** Comece com "Sobre este projeto" e expanda conforme cresce.

---

## ✅ Checklist final

Você está pronto pro D2 se:

- [x] `claude --version` retorna número
- [x] `.env` tem `ANTHROPIC_API_KEY` configurada
- [x] `claude` abre interface sem erro
- [x] `/resumo-do-dia` retorna resposta
- [x] `CLAUDE.md` tem pelo menos a seção "Sobre este projeto" preenchida

Se TODOS os 5 ✓ — **você tá no jogo**.

---

## Próximo passo

📋 **Dever de casa (entre D1 e D2):**
- Leia `docs/matriz-de-dores.md`
- Preencha **3 dores do seu negócio × 4 dimensões**
- Traga preenchido domingo 9h

🎯 **No D2 (domingo):**
- Vamos juntos construir **uma skill nova** baseada nas dores que você listou
- Foco prático — você sai com algo SEU rodando

---

## Atalhos úteis pra navegar Claude Code

| Atalho | O que faz |
|---|---|
| `Shift+Tab` | Cicla modo de permissão (default → acceptEdits → plan) |
| `↑` / `↓` | Histórico de prompts |
| `Ctrl+R` | Busca reversa no histórico |
| `Esc` | Para Claude no meio da resposta |
| `Ctrl+C` | Cancela input/interrompe |
| `Ctrl+D` | Sai do Claude Code |
| `/help` | Lista todos os comandos disponíveis |
| `/clear` | Limpa conversa (começar tópico novo) |
| `/model` | Troca modelo (Haiku/Sonnet/Opus) |
| `/cost` | Quanto você gastou na sessão |

---

## Travou em algo?

1. **Erro vermelho no terminal?** Copia o texto, cola no Claude Code com a pergunta "como resolvo esse erro?"
2. **Comando não responde?** `Ctrl+C` pra parar, tenta de novo
3. **Não sei onde tô?** `pwd` mostra a pasta atual
4. **Persiste?** Chat do Meet (D1/D2) ou pergunta no Q&A do D3

---

**Bons agentes 🤖**
*— Credco · DZA Edição 1*
