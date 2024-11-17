# Section 5. Debugging Node.js (Notes App)

## 05.25 Intro

This section focus on main topic:

- Learn how to debug notes application.

## 05.26 Debugging Node.js

### Debugging Strategies

- **console.log**: A basic tool for printing variable values and understanding the program flow.
- **Node Debugger**: Integrates with Chrome Developer Tools for a GUI-based debugging experience.

### Using console.log

- Demonstrates how to use `console.log` to print variable values.
- Explains the limitations of `console.log` for extensive debugging.

### Node Debugger

- **debugger Statement**: Pauses the program and allows inspection of variables using Chrome Developer Tools.

```javascript
const addNote = (title, body) => {
  const currentNotes = loadNotes();
  const duplicatedNote = currentNotes.find((note) => note.title === title);

  debugger; // <--- adding debugger statement here

  if (duplicatedNote) {
    console.log(ERROR_DUPLICATED_TITLE);
    return;
  } else {
    currentNotes.push({ title: title, body: body });
    saveNotes(currentNotes);
    console.log(SUCCESS_ADD_NOTE);
  }
};
```

- **inspect Option**: Enables debugging when running Node.js.

```console
    AzureAD+MinhHo@LNV-PF4F8V7S $node inspect app.js add --title="Testing" --body="Debugger"
```

### Chrome DevTools

- **Accessing DevTools**: Navigate to `chrome://inspect` in Chrome.
- **Remote Target Configuration**: Ensure the remote target is configured to `localhost:9229` and `127.0.0.1:9229`.
- **Inspecting the Application**: Click on the `Inspect` link under remote target.
- **Understanding the Interface**: The `Sources` tab shows the wrapped Node.js script.
- **Adding Project Folder**: Add the project folder to the DevTools workspace.
- **Using the Debugger**: The debugger pauses at the `debugger` statement for inspection.
- **Exploring Variables**: Use the console in DevTools to explore variable values.
- **Continuing Execution**: Click the play button to resume script execution.

> while `console.log` is simple and effective, the Node Debugger offers more flexibility for complex scenarios.

## 05.27 Error Messages

```javascript
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJsON); // <--- Typo error here
};
```

```console
ReferenceError: dataJsON is not defined
    at saveNotes (C:\Users\MinhHo\Workspace\Working\Learning\udemy\the-complete-node-js-developer\exercises\Section 4
\04-24-reading-a-note\notes.js:22:36)
    at Object.addNote (C:\Users\MinhHo\Workspace\Working\Learning\udemy\the-complete-node-js-developer\exercises\Sect
ion 4\04-24-reading-a-note\notes.js:64:5)
    at Object.handler (C:\Users\MinhHo\Workspace\Working\Learning\udemy\the-complete-node-js-developer\exercises\Sect
ion 4\04-24-reading-a-note\app.js:20:17)
```

- **Error Type**: The error message indicates a `ReferenceError`.
- **Error Details**: The message specifies that `dataJsON` is not defined.
- **Stack Trace**: Provides a trace of function calls leading to the error.

### Using the Stack Trace

- **Top of the Trace**: Contains the most relevant information about the error.
- **Function Calls**: Shows the sequence of function calls that led to the error.
- **Node Internals**: The bottom of the trace contains less actionable information related to Node.js internals.
