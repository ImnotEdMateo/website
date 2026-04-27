import { parseInline } from "./inline";
import { getLineType } from "./blocks/lineType";

export function parseMessage(message: string): ParsedLine[] {
  return message.split("\n").map(line => ({
    type: getLineType(line),
    chunks: parseInline(line)
  }));
}
