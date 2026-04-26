import type { MessageChunk } from "../types";

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;

export function parseLinks(chunks: MessageChunk[]): MessageChunk[] {
  const result: MessageChunk[] = [];

  for (const chunk of chunks) {
    if (chunk.type !== "text") {
      result.push(chunk);
      continue;
    }

    const parts = chunk.text.split(URL_REGEX);

    for (const part of parts) {
      if (URL_REGEX.test(part)) {
        result.push({
          type: "url",
          url: part,
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
}
