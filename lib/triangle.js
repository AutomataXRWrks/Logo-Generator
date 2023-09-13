const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(color){
        super(color);
        this.color;

    }

    render(){
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`
    }
}

module.exports = Triangle;