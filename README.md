# Accessing req.body Directly in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: attempting to access `req.body` directly without using a body-parsing middleware.  The code in `bug.js` illustrates this mistake, and `bugSolution.js` shows the correct approach using the `body-parser` middleware.

## Problem

The `http` module in Node.js doesn't automatically parse the request body.  When a client sends a POST request with data, that data is not readily available in `req.body`.  Trying to access `req.body` directly will result in it being `undefined`, leading to errors or unexpected behavior.

## Solution

To correctly access the request body, you need to use a middleware like `body-parser`. This middleware parses the incoming request body and makes it available as `req.body`.

## How to Run

1. Clone the repository.
2. Install the dependencies: `npm install body-parser`
3. Run the buggy version: `node bug.js` (This will log `undefined`)
4. Run the corrected version: `node bugSolution.js` (This will correctly log the request body)