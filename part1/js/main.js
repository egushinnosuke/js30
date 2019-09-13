window.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    changeStyle(e.keyCode)
    
});

function changeStyle(key){
    let key_elm = document.querySelector('.key[data-keycord="'+key+'"]');
    key_elm.style.color = "white";
}

function sound(key){
    let sound_elm = document.querySelector('audio[data-keycord="'+key+'"]');
    sound_elm.play();
}