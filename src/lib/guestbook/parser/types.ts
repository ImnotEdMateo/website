export type LineType = "normal" | "greentext" | "orangetext";

export type MessageChunk =
  | { type: "text"; text: string }
  | { type: "link"; id: number; text: string }
  | { type: "url"; url: string; text: string };

export interface ParsedLine {
  type: LineType;
  chunks: MessageChunk[];
}
