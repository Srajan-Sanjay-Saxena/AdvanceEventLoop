## Event Loop Testing and Examples

This repository contains a comprehensive collection of examples demonstrating various aspects of the JavaScript/Node.js Event Loop, focusing on the execution order of different types of operations including I/O, timers, microtasks, and process events.

## 📚 Project Structure

## 🎯 Purpose

This project serves as a practical demonstration of the Node.js Event Loop's behavior, particularly focusing on:

- Microtask queue priority (process.nextTick and Promises)
- I/O operations timing and execution order
- Timer behavior and scheduling
- Event loop phases interaction
- Edge cases and special scenarios

## 🔍 Key Concepts Demonstrated

### 1. Microtask Priority

- How process.nextTick and Promises are prioritized
- Microtask execution between different event loop phases

### 2. I/O Operations

- File system operations timing
- I/O callbacks execution order
- Nested I/O operations behavior

### 3. Timer Operations

- setTimeout and setInterval behavior
- Timer precision and scheduling
- Interaction between timers and other operations

### 4. Event Loop Phases

- Complete phase-by-phase execution flow
- Priority order between different types of operations
- Close events and cleanup phase

## 🚀 Getting Started

1. Install dependencies:
2. Run individual examples:

```js
pnpm install
ts-node priorityTesting/<filename>.ts
```

## 📖 Examples Explanation

### Microtask Queue (mircrotaskQueue.ts)

Demonstrates how microtasks (process.nextTick and Promises) are executed with priority over other operations in the event loop.

### I/O and Timer Interaction (io_timer_check.ts)

Shows how I/O operations interact with timers and their execution order in the event loop.

### Comprehensive Comparison (allComparison.ts)

Provides a complete overview of how different types of operations (I/O, timers, microtasks) interact within the event loop.

### Edge Cases (wierdTimer_io.ts)

Explores special cases and unexpected behaviors in timer and I/O operation interactions.

## 🤝 Contributing

Feel free to contribute additional examples or improvements to existing ones. Please ensure any new examples follow the existing pattern and include clear comments explaining the expected behavior.
