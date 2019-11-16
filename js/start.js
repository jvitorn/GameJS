const element = document.getElementById('characterGame');
var count = 0 ;
function move(){
    element.classList.remove('character');
    console.log('removing to character');
    element.classList.add('characterMoveLeft');
    count = count +10 ; 
    element.style.marginLeft =+ count+"px";
    element.style.backgroundPositionX= + count+"px";
    console.log('add from character Move left ');
    console.log(count);
}
function stopMove(){
    count = 0 ;
    element.style.marginLeft = "45px";
    element.classList.remove('characterMoveLeft');
    element.classList.add('character');
    element.style.marginLeft ="45px";
}
function tecla(){
    
    if(event.keyCode == 119){
        console.log('voce pressionou a tecla W');
    }
    if(event.keyCode == 115){
        console.log('voce pressionou a tecla S');
    }
    if(event.keyCode == 97 ){
        console.log('voce pressionou a tecla A');
    }
    if(event.keyCode == 100){
        console.log('voce pressionou a tecla D');
        move();
    }
    if(event.keyCode == 32){
        stopMove();
    }
  }
document.body.onkeypress = tecla;

