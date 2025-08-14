const fs = require("fs");
const filePath = require("../database.json");
const { relative } = require("path");

const readData = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    throw new Error("Error reading file: " + error.message)
  }
}



const writeData = async () => {
  try {
    const data = await fs.writeFile(filePath, 'utf8')
  } catch (error) {
    throw new Error("Error reading file: " + error.message)
  }
} 
