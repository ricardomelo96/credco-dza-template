# Skills — como funciona

> **Skills são atalhos reutilizáveis.** Você escreve uma vez, invoca quantas vezes precisar com `/nome-da-skill`.

---

## Anatomia mínima

Cada skill mora numa pasta com um arquivo `SKILL.md`:

```
.claude/skills/
└── minha-skill/          ← nome da pasta = nome do comando (/minha-skill)
    └── SKILL.md          ← o arquivo de instruções
```

O `SKILL.md` tem 2 partes:

```yaml
---
description: O que essa skill faz (Claude lê isso pra saber quando usar)
---

Instruções do que a skill faz quando invocada.
Pode incluir `!`comandos bash`` que rodam ANTES do Claude ver.
```

---

## Exemplo neste template

Veja `.claude/skills/resumo-do-dia/SKILL.md` — uma skill comentada linha a linha que você pode copiar e modificar.

Pra testar:
```bash
# Dentro do Claude Code:
/resumo-do-dia
```

---

## Como criar a sua

```bash
# 1. Criar pasta
mkdir -p .claude/skills/minha-nova-skill

# 2. Criar SKILL.md
nano .claude/skills/minha-nova-skill/SKILL.md
# (ou: code .claude/skills/minha-nova-skill/SKILL.md)

# 3. Recarregar — saia do Claude Code (Ctrl+D) e abra de novo:
exit
claude

# 4. Invocar a nova skill
/minha-nova-skill
```

---

## Padrões recomendados

### ✅ Quando criar uma skill

- Você está copiando-colando as MESMAS instruções pela 3ª vez
- Uma seção do `CLAUDE.md` virou "procedimento" em vez de "fato"
- Você precisa de **contexto dinâmico** (bash rodando antes do Claude ler)
- Você quer um comando invocável por nome (`/deploy`, `/commit`, etc.)

### ❌ Quando NÃO criar

- É pergunta única (use chat direto)
- Sem reutilização (vai usar 1 vez)
- Instrução é estática e curta (vai no `CLAUDE.md`, não em skill)

---

## Argumentos

Skills aceitam argumentos via `$ARGUMENTS`, `$0`, `$1`, etc:

```yaml
---
description: Traduz componente entre frameworks
---

Migra o componente $ARGUMENTS[0] de $ARGUMENTS[1] para $ARGUMENTS[2].
```

Invocação: `/migrate SearchBar React Vue`

---

## Contexto dinâmico

A magia das skills: você pode rodar **bash antes** do Claude ver as instruções:

```yaml
---
description: Resume mudanças não commitadas
---

## Mudanças atuais:
!`git diff HEAD`

Resume as mudanças acima em 3 bullets.
```

Quando você invoca, `!`git diff HEAD`` é EXECUTADO primeiro. O resultado entra na skill. Claude vê os dados reais, não o comando.

---

## Documentação completa

📖 [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills)
