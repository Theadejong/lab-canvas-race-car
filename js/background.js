const bgImg = document.createElement('img');
bgImg.src = '../images/road.png';

class Background {
    constructor( canvasContext ){
        (this.ctx = canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 808),
        (this.height = 1110);
    }

    draw(){
        this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height);
    }


}