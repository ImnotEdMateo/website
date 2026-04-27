import type { MessageChunk } from "../types";
import type { InlineParser } from "./index";

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;

export const parseLinks: InlineParser = (chunks) => {
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
};
