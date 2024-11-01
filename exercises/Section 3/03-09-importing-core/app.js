const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is MinhHo.')

// Challenge: Append a message to the notes.txt
// 
// 1. Use appendFileSync to append a message to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

// Challenge solve:

fs.appendFileSync('notes.txt', ' I came from Việt Nam.')
