# Node.js HTTP Headers Already Sent Error

This repository demonstrates a common error in Node.js HTTP servers: the "Headers already sent" error.  This occurs when you attempt to set HTTP headers after you've already sent data to the response.  The provided code shows the error and its solution.

## Bug

The `bug.js` file contains a Node.js HTTP server that attempts to set the `Content-Type` header *after* writing data to the response. This results in the "Headers already sent" error.

## Solution

The `bugSolution.js` file corrects the issue by setting the headers *before* writing any data to the response. This adheres to the HTTP protocol's specification.