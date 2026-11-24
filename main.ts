import { mkdirSync, writeFileSync } from "node:fs";

// One office joke, written for the Office Joke Open.
// The payoff has to land in the last few words, so the joke is kept
// as a single line and written exactly as-is, with no trailing newline.
const JOKE =
  "I blocked out 'focus time' on my calendar, so my boss scheduled a meeting titled 'Quick sync about your focus time.'";

// Gate-mirroring check: the entry must be 1-200 characters of UTF-8
// text and not only whitespace, or the entry is invalid.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error("Joke must be 1-200 non-blank characters.");
  process.exit(1);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  console.error("Joke must be a single line.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
