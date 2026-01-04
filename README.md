# Node.js Learning Notes

This repository contains examples and notes on key Node.js concepts learned through practice.

## Topics Covered

### 1. File System Module (`fs_module/`)

The File System module in Node.js provides methods for interacting with the file system.

#### Key Methods Learned:
- **Reading Files**: `fs.readFileSync(path, encoding)` - Reads a file synchronously and returns its contents.
- **Writing Files**: `fs.writeFileSync(path, data, encoding)` - Writes data to a file, overwriting existing content.
- **Appending to Files**: `fs.appendFileSync(path, data, encoding)` - Appends data to the end of a file.
- **Creating Directories**: `fs.mkdirSync(path, options)` - Creates a directory. Use `{ recursive: true }` to create nested directories.
- **Removing Directories**: `fs.rmdirSync(path)` - Removes a directory (must be empty).
- **Deleting Files**: `fs.unlinkSync(path)` - Deletes a file.

#### Module Import Styles:
- **CommonJS**: `const fs = require('node:fs')`
- **ESM**: `import { readFileSync } from 'fs'`

### 2. Import and Require (`import_and_require/`)

Node.js supports two main module systems for importing code.

#### CommonJS (Traditional):
- Uses `require()` function to import modules
- Example: `const fs = require('node:fs')`

#### ES Modules (ESM) (Modern):
- Uses `import` statements
- Example: `import { readFileSync } from 'fs'`

### 3. Blocking vs Non-Blocking Code (`blocking_and_unblocking_code/`)

Node.js can handle operations in two ways: blocking (synchronous) and non-blocking (asynchronous).

#### Blocking (Synchronous) Code:
- Operations that block the execution thread until completed
- Example: `fs.readFileSync(path, encoding)` - The program waits for the file to be read before continuing
- Pros: Simple, predictable order
- Cons: Can make the application unresponsive for I/O operations

#### Non-Blocking (Asynchronous) Code:
- Operations that don't block the execution thread
- Uses callbacks, promises, or async/await
- Example: `fs.readFile(path, encoding, callback)` - The program continues executing, and the callback is called when the operation completes
- Pros: Better performance, doesn't block the event loop
- Cons: More complex, potential callback hell

### 4. Events Module (`events/`)

Node.js has a built-in Events module that allows you to create, emit, and listen to custom events.

#### Key Concepts:
- **EventEmitter Class**: The core class for handling events. Create an instance with `new EventEmitter()`
- **Listening to Events**: Use `.on(eventName, callback)` to register a listener for a specific event
- **Emitting Events**: Use `.emit(eventName, ...args)` to trigger an event and call all registered listeners
- **Error Events**: Special handling for 'error' events - if no listener is attached, Node.js will throw an error and exit

#### Example Usage:
- Create an EventEmitter instance
- Attach listeners using `.on()`
- Emit events using `.emit()` with optional arguments passed to listeners

### 5. Chat Application with Events (`chatApp/`)

A practical implementation of the Events module using class inheritance and the EventEmitter pattern.

#### Concepts Demonstrated:
- **Class Inheritance**: The `ChatRoom` class extends `EventEmitter` to inherit event functionality
- **Using Sets**: `Set` data structure to manage unique users in the chat room
- **Custom Events**: Emits 'join', 'message', and 'leave' events
- **Event Listeners**: Demonstrates listening to multiple custom events
- **Data Validation**: Checks if a user exists in the chat before sending messages or removing them

#### How It Works:
1. Create a ChatRoom instance
2. Users can join the chat - emits a 'join' event
3. Users can send messages - emits a 'message' event (only if the user is in the chat)
4. Users can leave the chat - emits a 'leave' event (only if the user is in the chat)

### 6. Buffer Module (`buffer/`)

Buffers in Node.js are used to handle binary data directly. They represent fixed-size chunks of memory allocated outside the V8 JavaScript engine.

#### Key Methods Learned:
- **Creating Buffers**:
  - `Buffer.alloc(size)` - Creates a zero-filled buffer of specified size (safe)
  - `Buffer.allocUnsafe(size)` - Creates an uninitialized buffer (faster but may contain old data)
  - `Buffer.from(data)` - Creates a buffer from a string, array, or another buffer

- **Reading and Writing**:
  - `buf.write(string)` - Writes a string to the buffer
  - `buf.toString([encoding, start, end])` - Converts buffer to string with optional encoding and range
  - Direct indexing: `buf[index]` - Access/modify individual bytes (values are 0-255)

- **Manipulating Buffers**:
  - `Buffer.concat([buf1, buf2, ...])` - Concatenates multiple buffers into one
  - `buf.length` - Returns the size of the buffer in bytes

#### Use Cases:
- Working with binary data streams
- File I/O operations
- Network protocols
- Encoding/decoding data

## Running the Examples

Each folder contains an `index.js` file with example code. To run:

1. Navigate to the folder: `cd fs_module`, `cd import_and_require`, `cd blocking_and_unblocking_code`, `cd events`, `cd chatApp`, or `cd buffer`
2. Run the script: `node index.js` (or `node bufferBasic.js` for the buffer folder)

## Notes

- The `note.txt` files contain placeholder text.
- `package.json` files define the project dependencies and scripts.
- Temporary files like `tempCodeRunnerFile.js` are generated by the code runner and can be ignored.