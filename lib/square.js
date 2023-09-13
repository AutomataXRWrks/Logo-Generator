const Shape = require('./shape.js');

class Square extends Shape{
    constructor(width, height, color){
        super(width,height, color);
        this.color = color;
        this.width = width;
        this.height = height;
    }
    render(){
        return `<rect x="50" y="40" width="${this.width}" height="${this.height}" fill="${this.color}"/>`
    }
}

module.exports = Square;