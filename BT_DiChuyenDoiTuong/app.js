function TheDog(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getDog = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"  alt="Pikachu"/>';
    };

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    };
    this.move

}

var hero = new TheDog("img/dog.jpg",100,30,200);
function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('Game').innerHTML = hero.getDog();
    setTimeout(start, 100)
}
start();