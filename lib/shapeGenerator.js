const circle = require('./circle');
const triangle = require('./circle');
const square = require('./square.js');



function renderLogo(data){
  switch (data){
    case "circle":
      return `<circle cx="25" cy="75" r="20"/>`;
  
    case "square":
  
      return `
      <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>`;

    case 'triangle':
  
      return `<polygon points="250,60 100,400 400,400" />`;
    }
}

function shapeGenerator(data) {
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  ${renderLogo(data.shape)}
  </svg>
`;
}

module.exports = {shapeGenerator};
