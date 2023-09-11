class Shape{
    constructor(width, height, color, text){
        this.color = color;
        this.text = text;
        this.width = width;
        this.height = height;
    }
    selectColor(color){
        this.color = color;

    }
}

module.exports = Shape;
