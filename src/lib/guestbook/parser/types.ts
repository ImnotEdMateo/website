export type LineType = "normal" | "greentext" | "orangetext";

export interface ParsedLine {
  type: LineType;
  chunks: MessageChunk[];
}
