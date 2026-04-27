import type { MessageChunk } from "../types";
import { parseReferences } from "./references";
import { parseLinks } from "./link";

export type InlineParser = (chunks: MessageChunk[]) => MessageChunk[];

const PIPELINE: InlineParser[] = [
  parseReferences,
  parseLinks
];

export function parseInline(text: string): MessageChunk[] {
  let chunks: MessageChunk[] = [{ type: "text", text }];

  for (const parser of PIPELINE) {
    chunks = parser(chunks);
  }

  return chunks;
}
