class Shape{
    constructor(width, height, form, color, text){
        this.color = color;
        this.text = text;
        this.form = form;
        this.width = width;
        this.height = height;
    }
    selectColor(color){
        this.color = color;

    }
}

module.exports = Shape;
