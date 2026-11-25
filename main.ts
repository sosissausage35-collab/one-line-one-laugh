// One Line, One Laugh — make.fun program/v1 entry.
//
// Writes a single self-contained funny line to /output/entry.txt.
// Deterministic: the same line on every run, no network, no randomness,
// no environment input. The gate requires UTF-8 text of 1-140 characters,
// not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_LENGTH = 140;

const LINE =
  "My AI assistant finally learned to be human: it ignores my messages and blames the Wi-Fi.";

// Gate: the entry must be one self-contained line of real text —
// non-empty, not only whitespace, within the 1-140 character limit,
// with no embedded newline and no leading/trailing whitespace.
function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `entry is ${line.length} characters, over the ${MAX_LENGTH} limit`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must contain more than whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

validateLine(LINE);

// Validated write: re-check the line at write time, then persist it as
// UTF-8 text with a single trailing newline so the file is exactly the
// line plus "\n" — nothing else.
function writeEntry(line: string, outPath: string): void {
  validateLine(line);
  mkdirSync("/output", { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");
}

writeEntry(LINE, "/output/entry.txt");
console.log(LINE);
