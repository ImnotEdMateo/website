import type { MessageChunk } from "../types";
import type { InlineParser } from "./index";

export const parseReferences: InlineParser = (chunks) => {
  const result: MessageChunk[] = [];

  for (const chunk of chunks) {
    if (chunk.type !== "text") {
      result.push(chunk);
      continue;
    }

    const parts = chunk.text.split(/(>> ?\d+)/g);

    for (const part of parts) {
      const match = /^>> ?(\d+)$/.exec(part);

      if (match) {
        result.push({
          type: "link",
          id: Number(match[1]),
          text: part
        });
      } else if (part) {
        result.push({
          type: "text",
          text: part
        });
      }
    }
  }

  return result;
};
