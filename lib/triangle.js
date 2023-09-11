const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(base, sideleft, sideright,color, text){
        super(color, text);
        this.base = base;
        this.sideleft = sideleft;
        this.sideright = sideright;
    }
}

module.exports = Triangle;