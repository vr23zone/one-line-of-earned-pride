import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After two years of teaching himself to code on the library computers between night shifts, the janitor finally saw his own name in the credits.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
