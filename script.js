    console.log("Welcome to tic tac toe");
    let Music = new Audio("Music.mp3");
    let Button = new Audio("Btn.mp3");
    let GameOver = new Audio("Ovr.mp3");
    let Turn = "X";
    let IsGameOver = false;

    const ChangeTurn = ()=>{
        return Turn==="X"?"0":"X";

    }
    const CheckWin = ()=>{
        let BoxTexts = document.querySelectorAll(".BoxText");

   let Wins = [ [0, 1, 2 ,8, 8 ,0],
    [3, 4, 5 ,8, 24, 0], 
    [6, 7, 8 ,8 ,40, 0], 
    [0, 3, 6 ,-8, 24, 90], 
    [1, 4, 7 , 8, 24, 90], 
    [2, 5, 8 , 24, 24,90],
    [0, 4, 8, 8, 24 ,45], 
    [2, 4, 6 ,8, 24, 135],
 ]

    Wins.forEach(e => {
        if (
            BoxTexts[e[0]].innerText === BoxTexts[e[1]].innerText &&
            BoxTexts[e[2]].innerText === BoxTexts[e[1]].innerText &&
            BoxTexts[e[0]].innerText !== ""
        ) {
            document.querySelector(".Info").innerText =
                BoxTexts[e[0]].innerText + " won";
                IsGameOver = true;
                document.querySelector(".ImageBox")
                .getElementsByTagName("img")[0].style.width = "200px";
                GameOver.play()
                document.querySelector(".line").style.width = "32vh";
                document.querySelector(".line").style.transform = `translate(${e[3]}vh, ${e[4]}vh) rotate(${e[5]}deg)`;




        }
    });

    }
    // Gmae Logic

    let Boxes = document.querySelectorAll(".Box");
    Boxes.forEach(element =>{
        let BoxText = element.querySelector(".BoxText");
        element.addEventListener("click", ()=>{
            if (BoxText.innerText ===""){
                BoxText.innerText= Turn;
                Turn = ChangeTurn();
                Button.play();
                CheckWin();
                if(!IsGameOver){
                    document.querySelector(".Info").innerText= "Turn for " + Turn;
                    
                }
                
            }
        })

    })
    let BoxTexts = document.querySelectorAll(".BoxText");

    let Reset = document.getElementById("Reset");
    Reset.addEventListener("click",()=>{
        BoxTexts.forEach(element =>{
            element.innerText = ""
            Turn= "X";
            IsGameOver = false
            document.querySelector(".Info").innerText= "Turn for " + Turn;
            document.querySelector(".ImageBox")
            .getElementsByTagName("img")[0].style.width = "0px";
            document.querySelector(".line").style.width = "0";

        })
    })