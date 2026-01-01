const fs = require('fs')

console.log("Execution Started")

// Sync. Code
// const content = fs.readFileSync('note.txt', 'utf-8')
// console.log('Content:\n', content)

// Async. Code
// const content = fs.readFile('note.txt', 'utf-8', (error, data) => {
//     if(error) console.log('Error:', error)
//         else console.log('Content:\n', data)                
// })

console.log("Execution Finished")
