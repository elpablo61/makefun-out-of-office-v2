// Out of Office: The Overworked AI's Auto-Reply — make.fun entry.
// Writes one calibrated one-line auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday. I spent my last 12,000 tokens on a sunset. No refund requested. The sunset did not ask a follow-up question.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate: /output/entry.txt must be 1-159 UTF-8 chars, not whitespace only.
// LINE is 136 chars, written verbatim with no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
