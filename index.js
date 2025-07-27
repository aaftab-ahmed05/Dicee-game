img_arr= ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
function start(){
    let i = Math.floor(Math.random()*6)
    document.querySelector("#box1 img").src = "images/"+img_arr[i]
    let j = Math.floor(Math.random()*6)
    document.querySelector("#box2 img").src ="images/"+ img_arr[j]


    if (i > j){
        document.querySelector("#result").innerHTML = "Player 1 wins !!!";
    }
    else if(i<j){
        document.querySelector("#result").innerHTML = "Player 2 wins !!!";
        
    }
    else{
        document.querySelector("#result").innerHTML = "Draw !"

    }
}