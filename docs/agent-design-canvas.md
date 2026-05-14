# Agent Design Canvas

> Canvas pra você desenhar o agente ANTES de codar.
> 1 página. 5 caixas. Funciona pra qualquer agente que você for construir.

---

## 🤖 Nome do agente

**Coloque um nome simples:** _________________________

> Exemplo: "Resumidor de Reuniões", "Atendente de WhatsApp", "Revisor de Email"

---

## 📥 Recebe

> **O que entra no agente?** Que tipo de input ele consome?

```
[Escreva aqui]
```

Exemplos:
- Mensagem de WhatsApp / Instagram
- E-mail inteiro como texto
- Áudio de reunião (transcrito)
- Linha de cliente novo no CRM
- Tarefa do Notion / Trello

---

## ⚙️ Faz

> **O que ele PROCESSA com esse input?** Sequência de ações.

```
1. [Primeira coisa]
2. [Segunda coisa]
3. [Terceira coisa]
...
```

Exemplos:
- Lê o input → identifica intenção → busca contexto no banco → gera resposta
- Lê e-mail → detecta urgência → categoriza → arquiva ou escala
- Recebe transcript → extrai ações → cria tarefas no Notion

---

## 📤 Entrega

> **O que sai do outro lado?** Output concreto.

```
[Escreva aqui]
```

Exemplos:
- Resposta de texto pro cliente (mesmo canal que recebeu)
- Notificação no Slack pro time
- Tarefa criada no Notion / Linear
- Linha nova no Supabase / Google Sheet
- E-mail enviado via SendGrid / Resend

---

## ❌ Falha em

> **Em quais cenários esse agente NÃO deve agir?** Quando ele deve parar e chamar humano?

```
[Escreva aqui]
```

Exemplos:
- Cliente pede algo fora do escopo (reembolso, cancelamento, queixa formal)
- Detecta sentimento negativo / agressivo
- Input ambíguo (não entendeu a pergunta) → pergunta clarificação
- Decisão que envolve valor > R$X
- Ação irreversível (deletar dados, cancelar transação)

> 💡 **Pensa nessa caixa como o "crachá de estagiário":** o que ele NÃO tem autonomia pra fazer sozinho?

---

## 🔌 Pré-requisitos

> **O que precisa estar configurado/instalado pra esse agente rodar?**

```
- [ ] [Pré-requisito 1]
- [ ] [Pré-requisito 2]
- [ ] [Pré-requisito 3]
```

Exemplos:
- [ ] API key da Anthropic (`ANTHROPIC_API_KEY`)
- [ ] Acesso ao banco Supabase (URL + key)
- [ ] Webhook configurado em [serviço X] apontando pra [endpoint Y]
- [ ] Conta autenticada em [Google Calendar / Slack / Linear]
- [ ] Tools customizadas: [enviar_email, criar_tarefa, etc]
- [ ] Knowledge files: [list de .md que ele consulta]

---

## ⏱️ Estimativa de complexidade

> **Quão complexo esse agente é pra construir?** Marque um:

- [ ] 🟢 **Simples** — 1 skill, sem tools customizadas, sem banco. *Construo em 1 dia.*
- [ ] 🟡 **Médio** — 1 subagent + 2-3 tools customizadas + acesso a 1 sistema externo. *Construo em 1 semana.*
- [ ] 🔴 **Complexo** — pipeline de subagents + múltiplas integrações + persistência. *Construo em 1 mês.*

---

## 📍 Próximo passo

Depois de preencher esse canvas:

1. **Comece pelo simples.** Se estiver em "Complexo", quebra em partes menores.
2. **A primeira versão deve PROVAR o conceito** — não precisa ser bonita, só precisa funcionar.
3. **Itere.** Cada bug é um item pra "Falha em".

---

> 💡 **Dica do Ricardo:** o canvas funciona porque te força a PENSAR antes de codar. 80% dos agentes morrem por falta de clareza dessas 5 caixas, não por bug de código.
