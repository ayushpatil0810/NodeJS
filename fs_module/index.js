// Common JS
const fs = require('node:fs')
const content = fs.readFileSync('note.txt', 'utf-8') // readfile
console.log(content);

// fs.writeFileSync('copy.txt', "I wrote this file.", 'utf-8') //write to file (overwrites)
fs.appendFileSync('copy.txt', `\n${content}`, 'utf-8') // appends to the end

fs.mkdirSync('games') // create a directory
fs.mkdirSync('games/xyz/a', { recursive: true }) // create a directory inside a directory

fs.rmdirSync('games/xyz/a') // remove a directory (Cannot delete a directory if it is not empty)

fs.unlinkSync('copy.txt')
// ESM
// import { readFileSync } from 'fs'
// const content = readFileSync('note.txt', 'utf-8')
// console.log(content);

