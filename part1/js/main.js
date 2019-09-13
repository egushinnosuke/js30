window.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    changeStyle(e.keyCode)
    playSound(e.keyCode)
});

function changeStyle(key){
    let key_elm = document.querySelector('.key[data-keycode="'+key+'"]');
    key_elm.classList.add("now-playing");
    setTimeout(function(){
        key_elm.classList.remove("now-playing")
    }, 500);
}

function playSound(key){
    let sound_elm = document.querySelector('audio[data-keycode="'+key+'"]');
    sound_elm.play();
}