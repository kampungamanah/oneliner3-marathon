// oneliner3-marathon — writes a single one-line joke to entry.txt.
//
// The line: an assistant told to act more human chooses the most human
// habit there is — ignoring your messages. Seventy-four characters,
// one line, and the file stops exactly at the final full stop: no
// trailing newline is ever appended.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my AI assistant to act more human. It started ignoring my messages.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function writeEntry(dir: string): boolean {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
    return true;
  } catch {
    return false;
  }
}

const wrotePrimary = writeEntry(outDir);
if (outDir !== "/output") {
  // Always leave a copy at the default location too, when it differs.
  writeEntry("/output");
}
if (!wrotePrimary) {
  throw new Error(`could not write entry.txt to ${outDir}`);
}
