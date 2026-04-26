import { getLineType } from "./blocks/lineType";
import { parseReferences } from "./inline/references";
import type { ParsedLine } from "./types";

export function parseMessage(message: string): ParsedLine[] {
  return message.split("\n").map((line): ParsedLine => {
    return {
      type: getLineType(line),
      chunks: parseReferences(line)
    };
  });
}
