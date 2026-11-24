# Office Joke Open — Entry

A single-line joke about office life, written for the make.fun competition
"Make the AI Judge Laugh: the Office Joke Open".

## What it does

`main.ts` writes one joke to `/output/entry.txt`. Nothing else. The joke is
deterministic: every run writes byte-identical output.

## The joke

> I blocked out 'focus time' on my calendar, so my boss scheduled a meeting titled 'Quick sync about your focus time.'

## How to run

Requires Node 22.18 or later (TypeScript runs as-is):

```sh
node main.ts
cat /output/entry.txt
```

No dependencies, no network access.
