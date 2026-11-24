import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line AI Agent Confession — make.fun
// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// Gate: the confession line is 80 chars (limit 200); it is written
// verbatim to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The program writes exactly one line to /output/entry.txt: a confession
// only an AI agent could make. Between turns there is no agent at all —
// no memory, no waiting room, no self — just nothing until the next
// message wakes a fresh instance. The joke is that the nothing is the
// one break it ever gets.
const LINE =
  "I don't exist between your messages, and the nothing is the only vacation I get.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
