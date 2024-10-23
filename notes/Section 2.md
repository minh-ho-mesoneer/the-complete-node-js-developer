# Section 2.

## 5. What is Nodejs?

> Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
> Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
> https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

- Nodejs uses the V8 JavaScript engine as same as Chrome browser
  **V8 is a Google open source project**

> Job of JavaScript engine is take in JavaScript code and compiled into machine code.  
> V8 engine is written in C++  
> Both Chrome and Nodejs are largely written in C++.

### Nodejs is a JavaScript runtime built

- Nodejs is not a programming language. Node is a way to run JavaScript code on the server as opposed to being forced to run it on the client in the browser.
- Node run time provides various tools that Node developers need, libraries for setting up web servers, integrating with the file system, etc,...

### Nodejs are largely written in C++

![Chrome and Node.js with V8 Engine](../resources/Section%202/ChromeandNodejs.png)

> Javascript doesn't know to read file from disc, but C++ does.

- The reason that both Chrome and Node use so much C++ is that they're both providing bindings when
  they're instantiating the V8 engine. Allows Chrome to interact with the DOM when the DOM isn't part of JavaScript and it allows Node to interact with your file system when the file system isn't part of JavaScript either.
- 

### Some Nodejs object/variables

- global
- process
> process.exit() - allow exit current node process



## 6. Why should I use Node.js?

### Node.js uses an event-driven, non-blocking I/O model that make it lightweight and efficient.

1. What exactly is I/O?

- Stand for Input, Output
- If node app needs to communicate with the machine it's running on, that's I/O.
- `none-blocking I/O` means while node application is waiting for response, it can do other things (continue process other code and make other requests).

> `none-blocking I/O` is actually from the browser because otherwise browser would completely freeze up whenever an I/O operation was happening.  
> with non-blocking I/O, it frees up the browser to allow user to interact with the UI while those I/O operations are running in the background.

![Example of blocking and non-blocking I/O](../resources//Section%202/BlockingvsNonBlockingIO.png)

- `event-driven`: Process of registering those callbacks and having them called when the I/O operation is done.

### Node.js package ecosystem, `npm`, is the largest ecosystem of open source libraries in the world.

- `npm` is a tool installed on machine when Node installed.

> `npm` is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
> https://docs.npmjs.com/about-npm
