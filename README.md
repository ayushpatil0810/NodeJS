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

### 7. HTTP Server (`http-server/`)

Node.js has a built-in HTTP module that allows you to create web servers without external dependencies.

#### Key Concepts:
- **Creating a Server**: Use `http.createServer(callback)` where the callback receives `req` (request) and `res` (response) objects
- **Request Object**: Contains information about the incoming HTTP request (method, URL, headers, etc.)
- **Response Object**: Used to send data back to the client
- **Response Methods**:
  - `res.writeHead(statusCode, headers)` - Sets the response status and headers
  - `res.end(data)` - Ends the response and sends data to the client
- **Server Methods**:
  - `server.listen(port, callback)` - Starts the server on a specified port

#### Basic Server Flow:
1. Create server with request handler
2. Handle incoming requests in the callback
3. Send response using response object methods
4. Start server with `listen()`

### 8. Custom HTTP Server with Routing (`custom-http-server/`)

Building on the basic HTTP server, this example demonstrates how to create a custom server with URL-based routing.

#### Key Concepts:
- **Request URL Handling**: Use `req.url` to determine which route the client is requesting
- **Switch Statement**: A clean way to handle multiple routes
- **HTTP Status Codes**:
  - `200` - OK (successful response)
  - `404` - Not Found (resource doesn't exist)
- **Response Methods**: `res.writeHead()` to set status code, `res.end()` to send response body

#### Routes Implemented:
- `/` - Home page
- `/about` - About page  
- `/contact-us` - Contact page
- Default (any other URL) - 404 Not Found

#### Server Features:
- Logs incoming requests with timestamps
- Handles multiple routes without external routing libraries
- Provides appropriate HTTP status codes

### 9. Task-Based HTTP Server (`task_basic_server/`)

A practical implementation of an HTTP server that handles different HTTP methods and routes, with request logging.

#### Task Requirements:
- **GET /**: Return a simple hello message
- **GET /contact-us**: Return contact details (email and phone)
- **POST /tweet**: Simulate creating a tweet and return success acknowledgment
- **GET /tweet**: Return all tweets (simulated)
- **Request Logging**: Log all incoming requests with timestamps to `log.txt`

#### Key Concepts Demonstrated:
- **HTTP Methods**: Handling GET and POST requests differently
- **Nested Routing**: Using switch statements for both method and path
- **File Logging**: Using `fs.appendFileSync()` to log requests to a file
- **Response Status Codes**:
  - `200` - OK (successful GET)
  - `201` - Created (successful POST)
  - `404` - Not Found
- **Request Properties**: Accessing `req.method` and `req.url`

#### Implementation Features:
- Logs every request with timestamp, method, and path
- Handles multiple HTTP methods in a single server
- Simulates database operations for tweet creation and retrieval

## Running the Examples

Each folder contains an `index.js` file with example code. To run:

1. Navigate to the folder: `cd fs_module`, `cd import_and_require`, `cd blocking_and_unblocking_code`, `cd events`, `cd chatApp`, `cd buffer`, `cd http-server`, `cd custom-http-server`, or `cd task_basic_server`
2. Run the script: `node index.js`

## Notes

- The `note.txt` files contain placeholder text.
- `package.json` files define the project dependencies and scripts.
- Temporary files like `tempCodeRunnerFile.js` are generated by the code runner and can be ignored.