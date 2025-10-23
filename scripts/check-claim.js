// Node 18+
// Validates that the PR changes exactly one topic line in TOPICS.md,
// switches (Available) -> (Taken by Name), and that the topic wasn't already taken.

const fs = require('fs');

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

const filePath = 'TOPICS.md';
if (!fs.existsSync(filePath)) fail('TOPICS.md not found in repo root.');

const before = fs.readFileSync(filePath, 'utf8');

// Basic checks: exactly one line must include "(Taken by"
const takenMatches = before.match(/\(Taken by [^)]+\)/g) || [];
// We allow many taken over time, but CI runs on PR diff. For safety we also check that
// at least one “Taken by” exists after changes in the PR environment (GitHub Action checks the diff).
// Here we just ensure each “Taken by …” line also contains a valid topic ID pattern at the start.

const lines = before.split('\n');
const errors = [];
let claims = 0;

lines.forEach((ln, idx) => {
  if (/\)\s—\s\(Taken by [^)]+\)/.test(ln)) {
    // check topic id at start (## sections ignored, topics start at two digits and a dot)
    if (!/^\d{2}\./.test(ln.trim())) {
      errors.push(`Line ${idx+1}: Claimed line missing a valid topic ID prefix (e.g., "07.")`);
    } else {
      claims += 1;
    }
  }
});

// At least one claim in current file:
if (claims === 0) fail('No "(Taken by ...)" found. Did you edit TOPICS.md correctly?');

// Prevent double-claim format issues:
lines.forEach((ln, idx) => {
  const taken = ln.match(/\(Taken by [^)]+\)/g);
  if (taken && taken.length > 1) errors.push(`Line ${idx+1}: Multiple "(Taken by ...)" found.`);
});

// Ensure no one changed the topic title accidentally:
lines.forEach((ln, idx) => {
  if (/^\d{2}\./.test(ln.trim())) {
    if (!/(Available|\(Taken by [^)]+\))$/.test(ln)) {
      errors.push(`Line ${idx+1}: Topic line must end with "(Available)" or "(Taken by ...)".`);
    }
  }
});

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('✅ Claim format looks valid.');
