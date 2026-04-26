import { parseReferences } from "./inline/references";
import { getLineType } from "./blocks/lineType";
import { parseLinks } from "./inline/link";

export function parseMessage(message: string): ParsedLine[] {
  return message.split("\n").map((line): ParsedLine => {
    let chunks = parseReferences(line);
    chunks = parseLinks(chunks);

    return {
      type: getLineType(line),
      chunks
    };
  });
}
