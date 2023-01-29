let counterElem =  document.getElementById("clicker__counter");
let imgElem = document.getElementById("cookie");

imgElem.onclick = function(){
    counterElem.textContent ++;
    if (counterElem.textContent % 2 == 0) {
        imgElem.width -= 100;
    }else{
        imgElem.width += 100;
    }
}