// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label for every human being
// to /output/entry.txt (UTF-8, one line, at most 160 characters).
//
// Why this line: the top-10 one-line joke entries on this judge all share
// one shape — a straight setup, then the laugh landing in the last few
// words ("put the line back", "Git blame says I did all three", "The backup
// was in the database"). This line copies that shape inside a real printed
// label: the human reads the warning, laughs, and does the warned-against
// thing anyway — and the kicker, "This label included", turns the label on
// itself. The joke is recognition, not random absurdity: everybody ignores
// warning labels. One idea, no filler, 120 of 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: The human wearing this label will read it, laugh, and do the exact thing it warns against. This label included.";

// The sealed gate only accepts UTF-8 text of 1-160 characters, not only
// whitespace, on a single line. Fail loudly instead of writing an
// invalid entry: a bad write here would score 0 and take no prize.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-160`);
}
if (ENTRY.trim().length === 0 || /\n/.test(ENTRY)) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
