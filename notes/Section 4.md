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
