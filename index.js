const inquirer = require('inquirer');
const fs = require('fs');
const shapeGenerator = require('./lib/shapeGenerator.js');
const shapeData = {};



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
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
        },

        {
        type: 'input',
        message: 'select a color shape',
        name: 'colorShape',
        },





      ])
      .then((response) => saveSVG(response));
}



function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Generated logo.svg')
);
}

function saveSVG(data){
  shapeData.text = data.text;
  shapeData.textColor = data.textColor;  
  shapeData.shape = data.shape;
  shapeData.colorShape = data.colorShape;
  //console.log(shapeData);   
        

  writeToFile("logo.svg", shapeGenerator.shapeGenerator(data));
}

function init() {
    createPrompts();   
}

init();


 
