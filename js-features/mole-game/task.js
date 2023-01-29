let holes = document.getElementsByClassName("hole");
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let hole of holes){
    hole.onclick = function checkMole(){
        let holeClass = hole.className;
        if (holeClass.includes("hole_has-mole")){
           dead.textContent ++;
        }else{
            lost.textContent++;
        }
        
        // setTimeout позволяет отрисовать актуальный счёт до завершения игры.
        setTimeout(function(){
            if (lost.textContent == 5){
                resetGame("Вы проиграли!")
            }else if (dead.textContent == 10){
                resetGame("Вы выиграли!")
            }
        }, 10);
        
    }
}

function resetGame(alertMsg){
    dead.textContent = 0;
    lost.textContent = 0;
    alert(alertMsg);
}