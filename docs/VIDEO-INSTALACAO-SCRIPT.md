# Vídeo Pré-D1 — Roteiro de Instalação (Loom 5min)

> Roteiro pra Ricardo gravar Loom/QuickTime de 5min cobrindo instalação básica antes do D1.
> Mandar pra base via WhatsApp 24-48h antes do sábado 16/Mai.

---

## Por que esse vídeo existe

Audiência DZA tem 74% foto B (leigos absolutos em terminal). PRIMEIROS-PASSOS.md em texto não funciona pra esse perfil. Vídeo de 5min cobrindo Mac+Windows reduz fricção pré-D1 em ~70% (estimativa: 12-15 alunos chegariam travados no sábado sem isso).

---

## Tempo total: ~5 minutos

Estrutura: introdução (30s) + 4 seções (~1min cada) + fechamento (30s).

---

## SCRIPT (palavra-por-palavra)

### 🎬 [0:00 - 0:30] Abertura

> **[Ricardo aparece na câmera, ou tela compartilhada já preparada]**
>
> "Oi pessoal, Ricardo aqui. Sábado vocês vão entrar no Do Zero ao Agente.
> Antes de sábado chegar, tem 4 coisinhas pra deixar pronto.
> Vou mostrar agora em 5 minutos. Acompanha junto comigo — pausa o vídeo quando precisar."
>
> "Se travar em qualquer passo: foto do erro no chat do Meet do D1 que eu desbloqueio.
> Mas se conseguir fazer agora, sábado de manhã economiza 1 hora."

---

### 🎬 [0:30 - 1:30] PARTE 1 — Abrir o Terminal

**[Cmd+Espaço · digita "Terminal" no Mac OU mostra Windows Terminal no menu Iniciar]**

> "Primeiro: vou abrir o Terminal. No Mac, aperta Cmd + Espaço, digita 'terminal', aperta Enter.
> No Windows, menu Iniciar → procura 'Windows Terminal' ou 'PowerShell'.
> Janela preta com letra branca abre. **Isso é o terminal. Não é programação. É só uma forma de digitar comandos pro computador.**
>
> Digita aí comigo: **pwd** + Enter."
>
> **[mostra que aparece um caminho tipo /Users/seunome]**
>
> "Esse caminho é onde você está. Anota: terminal é navegar entre pastas digitando."

---

### 🎬 [1:30 - 2:30] PARTE 2 — Instalar Node.js

**[Abre nodejs.org no navegador]**

> "Segundo: vou no site nodejs.org. Tem dois botões grandes — clica no que tá em **VERDE** ('LTS — Recommended').
>
> Vai baixar um instalador. **Mac:** arquivo .pkg. **Windows:** arquivo .msi. Abre e clica 'Next' até o fim.
> Aceita tudo que ele pedir — é instalador padrão, sem pegadinha."
>
> **[Volta pro terminal]**
>
> "Depois de instalar, no terminal digita: **node --version** + Enter.
> Tem que aparecer um número tipo **v20.10** ou maior. Se aparecer 'command not found', fecha terminal e abre de novo.
>
> Esse passo é o que mais trava — se aqui não rolar, foto no chat do Meet."

---

### 🎬 [2:30 - 3:30] PARTE 3 — Instalar Claude Code

**[no Terminal]**

> "Terceiro: instalar o Claude Code. Digita exatamente:
>
> **npm install -g @anthropic-ai/claude-code**
>
> Aperta Enter. Espera 1-2 minutos. Pode aparecer texto rolando — é normal. Quando voltar a aparecer o **$** ou **%**, terminou.
>
> Confere com: **claude --version**
> Tem que aparecer um número.
>
> Mac: se reclamar de permissão, prefixa com **sudo** e coloca sua senha do Mac."

---

### 🎬 [3:30 - 4:30] PARTE 4 — Clonar o template + login

**[no Terminal]**

> "Quarto e último: clonar nosso repositório com tudo preparado.
>
> Digita:
> **git clone https://github.com/ricardomelo96/credco-dza-template ~/dza**
>
> Isso baixa o template numa pasta 'dza' na sua home.
>
> Agora entra na pasta e abre Claude Code:
> **cd ~/dza**
> **claude**
>
> Vai abrir o navegador automaticamente pedindo login. **Faz login com email/Google na sua conta Anthropic.** Volta pro terminal — já tá autenticado.
>
> Confere com:
> **/help**
>
> Se listar comandos, **tá tudo pronto pro sábado**. Pode fechar."

---

### 🎬 [4:30 - 5:00] Fechamento

> "Você fez? Excelente. Sábado a gente se vê às 9h em ponto.
>
> Se travou: foto do erro no chat do Meet de domingo passado [link] — eu, foto C aluno avançado, e o pessoal do suporte resolvem hoje à noite.
>
> Resumindo o que você deveria ter rodando agora:
> ✅ Terminal aberto, sabe digitar `pwd`
> ✅ Node.js instalado (`node --version` retorna número)
> ✅ Claude Code instalado (`claude --version` retorna número)
> ✅ Repo `~/dza` clonado, `claude` abre, `/help` lista comandos
>
> Quem fez os 4: relaxa. Sábado é só conteúdo, não vai ter setup arrasta-pedra.
>
> Bom curso, vejo vocês sábado."

---

## 📋 Checklist pré-gravação

- [ ] Tela limpa (sem distratoras visuais)
- [ ] Terminal com fonte grande (mínimo 18pt) pra legibilidade no celular
- [ ] Áudio externo (microfone), não áudio do laptop
- [ ] Background quieto
- [ ] Loom OU QuickTime com gravação de tela + face cam pequena no canto

---

## 📤 Distribuição

Após gravar:

1. Upload no Loom (compartilha automaticamente) OU YouTube unlisted
2. Mandar link via WhatsApp BLAST pra:
   - 31 alunos pagos (use template_blast com link do video)
3. Mandar 24-48h antes do D1 (preferência: quinta-feira)
4. Pin no chat do Meet pra quem perder mensagem

**Texto sugerido pra mensagem WhatsApp:**

> Oi, Ricardo aqui — sábado é o D1 do Do Zero ao Agente.
>
> Gravei 5min mostrando como deixar tudo instalado ANTES do sábado.
> Faz 1x antes pra gente não perder tempo arrumando setup.
>
> [LINK DO VÍDEO]
>
> Quem travar: manda print do erro aqui que eu desbloqueio.
> Vejo todo mundo 9h sábado.

---

## 🔄 Versão atualizada futura

Em edições futuras (Edição 2+), considere:
- Versão Windows separada (foto B Windows usuária = perdida em comandos)
- Versão "do zero absoluto" (instalar git separado)
- Vídeo "10 problemas mais comuns" pós-D1 baseado em chat real
