// One Line, One Laugh — make.fun program/v1 entry.
//
// Writes a single self-contained funny line to /output/entry.txt.
// Deterministic: the same line on every run, no network, no randomness,
// no environment input. The gate requires UTF-8 text of 1-140 characters,
// not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI assistant finally learned to be human: it ignores my messages and blames the Wi-Fi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
