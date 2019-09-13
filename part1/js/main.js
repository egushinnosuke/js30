window.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    changeStyle(e.keyCode)
    
});

function changeStyle(key){
    let key_elm = document.querySelector('.key[data-keycord="'+key+'"]');
    key_elm.style.color = "white";
}