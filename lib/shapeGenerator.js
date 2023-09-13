const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square.js');



function renderLogo(data, color){
  switch (data){
    case "circle":
      const circle = new Circle(80,color);
      circle.selectColor(color);
      return circle.render();
  
    case "square":
      const square = new Square(200,200,color);
      square.selectColor(color);
      return square.render();

    case "triangle":
      const triangle = new Triangle(color);
      triangle.selectColor(color);
      return triangle.render();
    }
}

function shapeGenerator(data) {
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  ${renderLogo(data.shape,data.colorShape)}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>
`;
}

module.exports = {shapeGenerator};
