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


