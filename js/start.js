function move(){
    const element = document.getElementById('characterGame');
    element.classList.remove('character');
    console.log('removing to character');
    element.classList.add('characterMoveLeft');
    console.log('add from character Move left ');
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
        alert('voce pressionou a tecla ESPACO');
    }
  }
document.body.onkeypress = tecla;

