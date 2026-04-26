export type LineType = "normal" | "greentext" | "orangetext";

export function getLineType(line: string): LineType {
  if (line.startsWith(">>")) {
    return "normal";
  }

  if (line.startsWith(">")) {
    return "greentext";
  }

  if (line.startsWith("<")) {
    return "orangetext";
  }

  return "normal";
}
