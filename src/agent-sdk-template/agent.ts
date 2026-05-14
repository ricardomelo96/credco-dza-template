/**
 * ═══════════════════════════════════════════════════════════════
 *  AGENT SDK TEMPLATE — Anatomia Enxuta
 * ═══════════════════════════════════════════════════════════════
 *
 *  Este arquivo mostra como agente SDK funciona POR DENTRO.
 *  É deliberadamente SIMPLES — propósito é didático.
 *
 *  As 4 caixas do agente (B.4 do curso):
 *
 *  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
 *  │  PERSONA    │  │   TOOLS     │  │  KNOWLEDGE  │  │    LOOP     │
 *  │             │  │             │  │             │  │             │
 *  │ persona.md  │  │ tools.ts    │  │ persona.md  │  │  ESTE       │
 *  │             │  │             │  │ (mesmo)     │  │  ARQUIVO    │
 *  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
 *
 *  Pra rodar:
 *    1. Na raiz do repo: cp .env.example .env
 *    2. Edita .env e adiciona ANTHROPIC_API_KEY=
 *    3. cd src/agent-sdk-template && npm install
 *    4. npm run agent
 *
 * ═══════════════════════════════════════════════════════════════
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'fs';
import { config } from 'dotenv';
import { TOOLS, executeTool } from './tools.js';

// Carrega .env da raiz do repo (não desta pasta)
config({ path: '../../.env' });

const client = new Anthropic();
const MODEL = 'claude-haiku-4-5'; // Haiku = barato/rápido. Pra tarefa complexa, troca pra sonnet/opus.

// ═══════════════════════════════════════════════════════════════
//  CAIXA 1 + 3: PERSONA + KNOWLEDGE
//  Carregado de markdown — humano escreve, humano edita.
// ═══════════════════════════════════════════════════════════════
const PERSONA = readFileSync('./knowledge/persona.md', 'utf-8');

// ═══════════════════════════════════════════════════════════════
//  CAIXA 4: LOOP — Think → Act → Observe → ... → Done
//
//  Este é o coração. Aqui você VÊ o ciclo que faz agente ser agente.
//  Sem loop = chatbot. Com loop = agente.
// ═══════════════════════════════════════════════════════════════
async function agentLoop(userInput: string) {
  console.log('\n📥 Input recebido:', userInput.slice(0, 80) + '...\n');

  // Histórico de mensagens — começa com input do usuário
  let messages: Anthropic.MessageParam[] = [
    { role: 'user', content: userInput }
  ];

  // Loop continua até Claude decidir parar (stop_reason === 'end_turn')
  let iteration = 0;
  while (iteration < 10) { // safety: máximo 10 iterações
    iteration++;
    console.log(`\n🧠 Iteração ${iteration} — Think...`);

    // ─── THINK ───
    // Claude lê: system (persona) + messages (histórico) + tools (capacidades)
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 2048,
      system: PERSONA,
      tools: TOOLS,
      messages,
    });

    // ─── OBSERVE: o que Claude decidiu? ───
    if (response.stop_reason === 'end_turn') {
      // Decidiu PARAR — extrai resposta final e retorna
      const textBlocks = response.content.filter((c) => c.type === 'text');
      const finalText = textBlocks
        .map((c) => (c as Anthropic.TextBlock).text)
        .join('\n');

      console.log('\n💬 Agente:\n');
      console.log(finalText);
      console.log(`\n✓ Loop encerrou após ${iteration} iteração(ões)\n`);
      return finalText;
    }

    if (response.stop_reason === 'tool_use') {
      // Decidiu USAR FERRAMENTA — executa e volta pro think
      const toolUse = response.content.find(
        (c) => c.type === 'tool_use'
      ) as Anthropic.ToolUseBlock;

      console.log(`🛠️  Tool chamada: ${toolUse.name}`);
      console.log(`   Input:`, JSON.stringify(toolUse.input, null, 2));

      // ─── ACT ───
      const result = await executeTool(
        toolUse.name,
        toolUse.input as Record<string, unknown>
      );

      console.log(`✅ Tool result:`, result);

      // Adiciona o tool_use e o tool_result no histórico — Claude vai ver na próxima iteração
      messages.push({ role: 'assistant', content: response.content });
      messages.push({
        role: 'user',
        content: [
          {
            type: 'tool_result',
            tool_use_id: toolUse.id,
            content: JSON.stringify(result),
          },
        ],
      });

      // Volta pro loop → próxima iteração faz Think de novo com o resultado
    }
  }

  console.warn('⚠️  Safety break: 10 iterações atingidas sem fim. Retornando.');
}

// ═══════════════════════════════════════════════════════════════
//  Entrada do programa — recebe input via CLI argument ou usa default
// ═══════════════════════════════════════════════════════════════
const defaultInput = `Resuma essa reunião:

PARTICIPANTES: João (CEO), Maria (Produto), Pedro (Tech Lead).

João: Bom dia pessoal. Tudo bem? Vamos pro que importa.
Maria: Bom dia. Antes de falar do roadmap, queria revisitar o pricing.
A pesquisa que rodamos mostrou que 60% dos usuários acham R$197 caro.
João: Quanto a gente perderia se baixasse pra R$97?
Maria: Estimativa: -40% receita por usuário, mas +120% conversão.
Resultado: +30% receita total se a conversão se confirmar.
Pedro: Tecnicamente conseguimos rodar A/B test em 2 dias.
João: Aprovo o A/B. Maria, lidera. Pedro, suporta. Prazo: lançar terça.
Maria: Combinado. Bora.

(reunião encerra às 10:30)`;

const userInput = process.argv[2] ?? defaultInput;

agentLoop(userInput).catch((err) => {
  console.error('❌ Erro no agente:', err);
  process.exit(1);
});
