/**
 * Example entry point for the starter project.
 */

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * Greets a name with a friendly message.
 * @param {string} [name="world"]
 * @returns {string}
 */
export function greet(name = "world") {
  return `Hello, ${name}!`;
}

// Run when invoked directly via `npm start`.
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet("starter project"));
  console.log(`2 + 3 = ${add(2, 3)}`);
}
