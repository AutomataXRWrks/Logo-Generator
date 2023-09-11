const Shape = require('./shape.js');

class Square extends Shape{
    constructor(width, height){
        super(width,height);
    }
}

module.exports = Square;