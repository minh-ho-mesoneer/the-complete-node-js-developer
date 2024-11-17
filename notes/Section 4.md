# Section 4. File System and Command line arguments (Notes App)

## 04.14 Intro:

This section focus on 2 main topic:

- `1st`: **_File System_** - allow store the user's node data
- `2nd`: **_Command line arguments_** - allow get input from the users

**Target**: Learn how to `store data` in **_a real database_** and `get user input` through **_browser forms_**.

## 04.15 Getting input from users

```console
    node app.js <args>
```

To access command line arguments using `process.argv`

```javascript
// app.js
console.log(process.argv);
```

Execute script:

```console
    AzureAD+MinhHo@LNV-PF4F8V7S $node app.js minh.ho
```

Output:

```console
[
    'C:\\Users\\MinhHo\\AppData\\Roaming\\nvm\\v20.10.0\\node.exe',
    'C:\\Users\\MinhHo\\Workspace\\Working\\Learning\\udemy\\the-complete-node-js-developer\\exercises\\Section 4\\04-15-getting-input-from-users\\app.js',
    'minh.ho'
]
```

Output in console for `process.argv` value is an array:

- `1st string`: The path to the node.js executable on machine (different for every user).
- `2nd string`: The path to `app.js` file (different, depend on where the file lives on user machine).
- `3rd string`: The value that user actually provided.

## 04.16-17 Argument parsing with Yargs

**Node.js doesn't provide any argument parsing.** Instead, the community has created different packages to handle this, with Yargs being one of the most popular options.

**yargs**: Yargs helps developer build interactive command line tools, by parsing arguments and generating an elegant user interface.

> https://github.com/yargs/yargs

### Simple example:

---

**1. Defined app.js**

```javascript
// app.js

const yargs = require("yargs");

console.log(process.argv);
console.log(yargs.argv);
```

**2. Execute script**

```console
    AzureAD+MinhHo@LNV-PF4F8V7S $node app.js minh.ho
```

**3. Output**

```console
[
  'C:\\Users\\MinhHo\\AppData\\Roaming\\nvm\\v20.10.0\\node.exe',
  'C:\\Users\\MinhHo\\Workspace\\Working\\Learning\\udemy\\the-complete-node-js-developer\\exercises\\Section 4\\04-16+17-argument-parsing-with-yargs\\app.js',
  'minh.ho'
]
{ _: [ 'minh.ho' ], '$0': 'app.js' }
```

Output in console for `process.argv` value is an array:

- `1st string`: The path to the node.js executable on machine (different for every user).
- `2nd string`: The path to `app.js` file (different, depend on where the file lives on user machine).
- `3rd string`: The value that user actually provided.

Output in console for `yargs.argv` value is an object:

- `_(underscore) property`: Contains arguments without a corresponding flag, e.g., `[]`
- `$0 property`: Represents the script name or node command, e.g., `app.js`

### Using yargs with flag:

---

**1. Defined app.js**

```javascript
// app.js

const yargs = require("yargs");

console.log(process.argv);
console.log(yargs.argv);
```

**2. Execute script**

```console
    AzureAD+MinhHo@LNV-PF4F8V7S $node app.js minh.ho --title="Junior Software Engineer"
```

**3. Output**

```console
[
  'C:\\Users\\MinhHo\\AppData\\Roaming\\nvm\\v20.10.0\\node.exe',
  'C:\\Users\\MinhHo\\Workspace\\Working\\Learning\\udemy\\the-complete-node-js-developer\\exercises\\Section 4\\04-16+17-argument-parsing-with-yargs\\app.js',
  'minh.ho',
  '--title=Junior Software Engineer'
]
{ _: [ 'minh.ho' ], title: 'Junior Software Engineer', '$0': 'app.js' }
```

Output in console for `process.argv` value is an array:

- `1st string`: The path to the node.js executable on machine (different for every user).
- `2nd string`: The path to `app.js` file (different, depend on where the file lives on user machine).
- `3rd string`: The 1st value that user actually provided, e.g., `minh.ho`
- `4rd string`: The 2nd value that user actually provided, e.g., `--title=Junior Software Engineer`

Output in console for `yargs.argv` value is an array:

- `_(underscore) property`: Contains arguments without a corresponding flag, e.g, an array string `['minh.ho']`.
- `title property`: Holds the value for the `--title` flag, e.g, `Junior Software Engineer`
- `$0 property`: Represents the script name or node command, e.g., `app.js`

> The information from `process.argv` isn’t very useful because it includes unparsed options. However, **Yargs** makes things easier by parsing these options for us. It places the command in the `_(underscore)` property and the `--title` flag in the title property, making them easy to access. **Yargs** handles the parsing, so we don’t have to.

### Create command with yargs:

---

**1. Defined app.js**

```javascript
// app.js

const yargs = require("yargs");

// Create add command

yargs.command({
  command: "add",
  description: "Add a new note",
  handler: function () {
    console.log("Adding a new note...");
  },
});
```

**2. Execute `--help` command**

```console
AzureAD+MinhHo@LNV-PF4F8V7S $ node app.js --help
app.js [command]

Commands:
  app.js add  Add a new note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

As shown in console output of command above, using `--help` displays the available commands, such as `add`, which we created in `app.js`. This makes it easy to see what commands and options are available.

> By default yargs enables help for the application on the `--help` option.

**3. Execute add command**

```console
AzureAD+MinhHo@LNV-PF4F8V7S $ node app.js add
Adding a new note...
{ _: [ 'add' ], '$0': 'app.js' }
```

When we execute the `add` command, the console prints out the message `Adding a new note...`, indicating that the `add` command **_handler_** has run successfully.

### Extends yargs command with builder:

**1. Defined app.js**

```javascript
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Title of note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note content body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Adding a new note...");
    console.log("Title:", argv.title);
    console.log("Body:", argv.body);
  },
});
```

**2. Execute `--help` command**

```console
AzureAD+MinhHo@LNV-PF4F8V7S  $ node app.js add --help
app.js add

Add a new note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --title    Title of note                                   [string] [required]
  --body     Note content body                               [string] [required]
```

As shown in console output of command above, options `--title` and `--body` are **string** and **required**. Cause we defined it in `builder` options as `demandOption: true, type: "string"`

## 04.18 Storing data with JSON

> JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.  
> **_Read more_**: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

