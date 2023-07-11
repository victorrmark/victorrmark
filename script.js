let display = document.getElementById('display-more');
let hide = document.getElementById('close-more');

hide.hidden = true;
hide.style.cursor = 'pointer';
document.getElementById('drop-nav').hidden = true;

display.onclick = function(){
    hide.hidden = false;
    display.hidden = true;
    document.getElementById('drop-nav').hidden = false;
}

hide.onclick = function(){
    hide.hidden = true;
    display.hidden = false;
    document.getElementById('drop-nav').hidden = true;

}


let date = new Date()
let year = date.getFullYear();

document.getElementById('date').innerHTML = year;