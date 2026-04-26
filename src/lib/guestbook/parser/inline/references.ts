import type { MessageChunk } from "../types";

export function parseReferences(text: string): MessageChunk[] {
  const parts = text.split(/(>>\s*\d+)/g);

  return parts.map(part => {
    const match = /^>>\s*(\d+)$/.exec(part);

    if (match) {
      return {
        type: "link",
        id: Number(match[1]),
        text: part
      };
    }

    return {
      type: "text",
      text: part
    };
  });
}
