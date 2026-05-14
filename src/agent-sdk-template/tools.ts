/**
 * ═══════════════════════════════════════════════════════════════
 *  CAIXA 2: TOOLS — Ações que o agente pode fazer no mundo
 * ═══════════════════════════════════════════════════════════════
 *
 *  Cada tool tem 3 partes obrigatórias:
 *    1. name         — identificador único
 *    2. description  — Claude lê pra DECIDIR quando usar
 *    3. input_schema — formato dos parâmetros (JSON Schema)
 *
 *  + 1 parte que VOCÊ implementa em `executeTool`:
 *    4. handler      — o que ela executa de verdade
 *
 *  💡 Boa prática: descrições CLARAS no description.
 *     Quanto melhor, mais Claude usa a tool no momento certo.
 *
 * ═══════════════════════════════════════════════════════════════
 */

import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync, mkdirSync, existsSync } from 'fs';

// ───────────────────────────────────────────────────────────────
// LISTA DE TOOLS — declaração + schema
// ───────────────────────────────────────────────────────────────
export const TOOLS: Anthropic.Tool[] = [
  {
    name: 'salvar_resumo',
    description:
      'Salva o resumo de uma reunião em arquivo markdown no disco. Use quando o usuário pedir pra "salvar", "registrar" ou "exportar" o resumo, OU sempre que terminar de gerar um resumo completo (pra criar registro durável).',
    input_schema: {
      type: 'object',
      properties: {
        titulo: {
          type: 'string',
          description: 'Título curto da reunião (3-8 palavras)',
        },
        resumo: {
          type: 'string',
          description: 'Resumo completo em markdown (com seções e bullets)',
        },
      },
      required: ['titulo', 'resumo'],
    },
  },
  {
    name: 'contar_palavras',
    description:
      'Conta quantas palavras tem em um texto. Use quando precisar verificar se um resumo está dentro do limite de palavras pedido.',
    input_schema: {
      type: 'object',
      properties: {
        texto: {
          type: 'string',
          description: 'Texto pra contar palavras',
        },
      },
      required: ['texto'],
    },
  },
];

// ───────────────────────────────────────────────────────────────
// HANDLERS — o que cada tool faz quando invocada
// ───────────────────────────────────────────────────────────────
export async function executeTool(
  name: string,
  input: Record<string, unknown>
): Promise<unknown> {
  switch (name) {
    case 'salvar_resumo': {
      const titulo = input.titulo as string;
      const resumo = input.resumo as string;

      // Cria pasta `output/` se não existir
      const outputDir = './output';
      if (!existsSync(outputDir)) mkdirSync(outputDir);

      // Salva com timestamp pra evitar overwrite
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `${outputDir}/${timestamp}-${titulo.toLowerCase().replace(/\s+/g, '-')}.md`;
      const content = `# ${titulo}\n\n_Gerado por agent-sdk-template em ${new Date().toLocaleString('pt-BR')}_\n\n---\n\n${resumo}`;

      writeFileSync(filename, content);

      return {
        success: true,
        path: filename,
        bytes: content.length,
      };
    }

    case 'contar_palavras': {
      const texto = input.texto as string;
      const count = texto.trim().split(/\s+/).filter(Boolean).length;
      return { count, texto_preview: texto.slice(0, 50) + '...' };
    }

    default:
      return { error: `Tool "${name}" não implementada` };
  }
}

// ═══════════════════════════════════════════════════════════════
//  💡 COMO ADICIONAR NOVA TOOL:
//
//  1. Adiciona no array TOOLS acima:
//     {
//       name: 'minha_nova_tool',
//       description: 'O que ela faz e quando usar',
//       input_schema: { ... }
//     }
//
//  2. Adiciona o handler em `executeTool`:
//     case 'minha_nova_tool': {
//       // sua lógica
//       return { resultado };
//     }
//
//  3. Reinicia o agent. Pronto.
//
//  Exemplos de tools úteis pra adicionar:
//   - enviar_email (via Resend / SendGrid)
//   - buscar_no_banco (via Supabase)
//   - criar_tarefa_notion (via Notion API)
//   - postar_slack (via webhook)
// ═══════════════════════════════════════════════════════════════
