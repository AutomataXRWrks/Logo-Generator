const Shape = require('./shape.js');

class Circle extends Shape{
    constructor(width, height, color, text, radius){
        super(width, height, color, text);
        this.radius = radius;
    }
}

module.exports = Circle;