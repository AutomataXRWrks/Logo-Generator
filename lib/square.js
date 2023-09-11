const Shape = require('./shape.js');

class Square extends Shape{
    constructor(width, height, color, text){
        super(width,height, color, text);
    }
}

module.exports = Square;