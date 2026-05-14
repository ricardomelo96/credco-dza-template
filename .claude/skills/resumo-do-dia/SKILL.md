---
# ═══════════════════════════════════════════════════════════════
# SKILL.md — Skill EXEMPLO comentada
# ═══════════════════════════════════════════════════════════════
#
# Esta skill é um EXEMPLO PEDAGÓGICO pra você entender a anatomia.
# Use ela como modelo pras suas próprias.
#
# Pra testar: dentro do Claude Code, digite `/resumo-do-dia`
# ═══════════════════════════════════════════════════════════════

description: Resume o que foi feito hoje neste projeto e flagga riscos. Use quando o usuário pergunta o que mudou, quer mensagem de commit, ou pede review do diff.

# 💡 SOBRE O "description":
# - É o campo mais importante do frontmatter
# - Claude lê ISSO pra decidir quando usar a skill automaticamente
# - Inclua palavras-chave que o usuário falaria naturalmente
# - Mantenha em 1-2 linhas
---

# Skill: Resumo do Dia

<!-- 💡 Este H1 é só pra você (humano) — não vai pro Claude. -->

## Atividade git de hoje

!`git log --since="midnight" --oneline 2>/dev/null || echo "Sem repositório git ou sem commits hoje."`

<!--
  💡 A MAGIA:
  A linha acima começa com `!\`` — isso faz o bash RODAR antes do
  Claude ver a skill. O resultado real do `git log` é injetado
  aqui, no lugar do comando.
-->

## Mudanças não commitadas

!`git diff HEAD --stat 2>/dev/null || echo "Sem mudanças não commitadas."`

## Instruções para o Claude

Com base nos dados acima:

1. **Resumo em 2-3 bullets** do que foi feito hoje (foque em mudanças funcionais — ignore typos e formatação)
2. **Riscos que você nota** (se houver):
   - Tratamento de erro faltando
   - Valores hardcoded que deveriam ser config
   - Testes que provavelmente precisam atualizar
   - Padrões inconsistentes com o resto do projeto

3. Se **não há atividade hoje**, responda apenas: "Sem atividade git hoje."

Mantenha resposta em **menos de 200 palavras**. Tom: direto, sem floreio.

<!--
  ═══════════════════════════════════════════════════════════════
  💡 COMO MODIFICAR ESTA SKILL PRA SUAS NECESSIDADES:

  1. Mude `description` pra refletir o que SUA versão faz
  2. Mude o comando bash entre !`...` pra outro comando (ou
     adicione mais comandos)
  3. Mude as "Instruções para o Claude" pra ele agir diferente
  4. Salve e digite `/reload-plugins` no Claude Code
  5. Invoque com `/resumo-do-dia` (ou o nome que você der à pasta)

  EXEMPLOS de variações que vocês podem criar:

  → /resumo-da-semana    (git log --since="last sunday")
  → /resumo-do-mes       (git log --since="1 month ago")
  → /quem-mudou-o-que    (git log --pretty=format:'%an %s')
  → /quanto-falta-pra-pr (git diff main HEAD --stat)

  Cada uma é uma cópia desta, com 1-2 ajustes.
  ═══════════════════════════════════════════════════════════════
-->
