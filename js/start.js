const element = document.getElementById('characterGame');
var position = 45;
var countFrames = 1 ; 
var count = 0 ;
function moveLeft(){
    //count interval
    if(countFrames <= 10){
        for (var interval = 10 ; interval <= 100; interval+10 ){
            setTimeout(function(){
                element.classList.add("frame-left"+countFrames);
                console.log("this is add in frame-left"+countFrames);
            },interval);
            interval = interval + 10;
            setTimeout(function(){
                element.classList.remove("frame-left"+countFrames);
                console.log("this is remove in frame-left"+countFrames);
                countFrames ++;
            },interval);
        }
        console.log('entrou');
    }
    else{
        countFrames = 1;
        console.log('nao entrou');
    }
    countFrames = 1;
    position = position + 10
    element.style.marginLeft = position+"px"; 
}
function stopMove(){
    count = 0 ;
    position = 45;
    element.classList.remove('frame-left'+countFrames);
    element.classList.add('character');
    element.style.marginLeft = position+"px";
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
    if(event.keyCode == 100){//key 'd'
        console.log('voce pressionou a tecla D');
        countFrames = 1;
        moveLeft();
    }
    if(event.keyCode == 32){//key space
        stopMove();
    }
  }
document.body.onkeypress = tecla;

