const Shape = require('./shape.js');

class Circle extends Shape{
    constructor(radius,color){
        super(color);
        this.radius = radius;
        this.color = color;
    }
    render(){
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}"/>`
    }
}

module.exports = Circle;