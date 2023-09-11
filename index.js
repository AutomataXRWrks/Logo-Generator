// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/circle.js');
const circle = require('./lib/triangle.js');
const circle = require('./lib/square.js');
const shapeGenerator = require('./utils/generateMarkdown.js');
const shapeData = {};



// TODO: Create an array of questions for user input
const questions = ['What is your user name?'];

function createPrompts(){
    inquirer.prompt([
        {
          type: 'input',
          message: 'insert text',
          name: 'text',
        },
        {
          type: 'input',
          message: 'select text color',
          name: 'textColor',
        },

        {
        type: 'rawlist',
        message: 'select a shape',
        name: 'license',
        choices: ['circle', 'triangle', 'square'],
        },

        {
        type: 'input',
        message: 'select a color shape',
        name: 'colorShape',
        },





      ])
      .then((response) => saveSVG(response));
      //writeToFile("readme.me", readmeContent); 
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!')
);
}

function saveSVG(data){
  shapeData.text = data.text;
  shapeData.textColor = data.textColor;  
  shapeData.shape = data.shape;
  shapeData.shapeColor = data.shapeColor;   
        
  //console.log(readmeContent);
  //writeToFile("README.md", gMarkDown.generateMarkdown(readmeContent));
}

// TODO: Create a function to initialize app
function init() {
    createPrompts();   
}

// Function call to initialize app
init();


 
