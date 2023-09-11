const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(base, sideleft, sideright,color){
        super(color);
        this.base = base;
        this.sideleft = sideleft;
        this.sideright = sideright;
    }
}

module.exports = Square;