# Section 3. Node.js Module System

## 03.10 Importing your own files

```javascript
    // utils.js
    const name = "MinhHo";

    ----------------------------------------------------------------
    // app.js
    require('utils.js');

    console.log(name);
```

The program would fail because we're trying to reference name variables which not existed.

```console
AzureAD+MinhHo@LNV-PF4F8V7S:~$ node app.js
AzureAD+MinhHo@LNV-PF4F8V7S:~$
console.log(name);
            ^

ReferenceError: name is not defined

```

> Important aspect of the node module system:
> All of files which developer refer to as modules, have their own scope.

**To solve it:** Using explicitly `export` all of the stuff (variable, function, etc...) the file should share with other files.

```javascript
    // utils.js
    const name = "MinhHo";

    module.exports = name;

    ----------------------------------------------------------------
    // app.js
    const name = require('utils.js');

    console.log(name);
```

## 03.11 Importing npm Modules

1. Init a npm package

```console
npm init
```

2. Install a npm package

```text
npm install <module-name>@<specific-version>

examples: npm install validator@13.12.0
```

**Notes**

- `node_module`: This folder contains all the code for the installed dependencies. It should not be manually edited.
- `package-lock.json`: This file contains extra information that makes NPM faster and more secure. It lists the exact versions of all dependencies, their sources, and a SHA hash to ensure we get the same code if we reinstall the dependencies.

## 03.12 Printing in color

- The `node_modules` folder is where all the libraries (or packages) your Node.js app needs are stored. When your app needs to use one of these libraries, it looks in this folder to find it.
If `node_modules` is missing, the Node.js app will be crash.

- To recreate the `node_modules` folder, simply run `npm install`. This command will use the `package.json` and `package-lock.json` files to determine and install the **necessary dependencies** and their **versions**, rebuilding the `node_modules` folder from scratch.



