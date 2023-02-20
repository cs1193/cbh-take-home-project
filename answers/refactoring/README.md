# Refactored Code

1. I took the choice to refactor to pure function to avoid any side effects, so divided the code into `generateHex`, `getCandidate` and `deterministicPartitionKey` to perform single unit of work.
2. Reduced the branching into simpler function and used ternary operator for better readability
3. Removed unintended branch inside `if` clause and linearized it into a single line format.
