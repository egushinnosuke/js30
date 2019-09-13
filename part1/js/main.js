window.addEventListener("keydown", function(e){
    console.log(e.keyCode);

    
});

function changeStyle(key){
    document.querySelector('.key[data-keycord]='+key).style.color = white;
}