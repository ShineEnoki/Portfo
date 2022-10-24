function GetNumberAndTurn(randomNum){
    let x = document.querySelector("#playerNumber").textContent;

    document
        .querySelector("#reply")
        .textContent = x + " got '" + randomNum + "'.";
    
    // Whose turn now
    if ( x === "Player1") {
        document.querySelector("#playerNumber").textContent = "Player2";
    } else {
        document.querySelector("#playerNumber").textContent = "Player1";
    }
}
//Random number generation code
document.querySelector("button").addEventListener("click", getRandomInt)
function getRandomInt() {

    // Generating random number
    
    let generateNumber = Math.floor(Math.random() * 10);
    let randomNum ;

    if (generateNumber % 2 == 0) {
        randomNum = generateNumber + 1;
    } else {
        randomNum = generateNumber;
    }
    
    
    

    // change image
    let x = document.querySelector("#playerNumber").textContent;

    // for player1
    if ( x === "Player1") {
        let heroicon = document.querySelector(`#blue${randomNum}`).src.substr(-5, 1);
        if(heroicon > 8) {
            document.querySelector("#playerNumber").textContent = "Player1";

            document.getElementById("fight").style.display = "none";
            document.getElementById("kill").style.display = "flex";

            document.querySelector("#kill").addEventListener("click", killOppositeHero) ;

            function killOppositeHero() {
                let generateNumber = Math.floor(Math.random() * 10);
                let randomNum ;
                if (generateNumber % 2 == 0) {
                    randomNum = generateNumber + 1;
                } else {
                    randomNum = generateNumber;
                }

                document.querySelector(`#red${randomNum}`).src = "photo/10.png";
                document.querySelector(`#blue${randomNum}`).src = "photo/6.png"; 

                document.getElementById("fight").style.display = "flex";
                document.getElementById("kill").style.display = "none";
            }                                                               
        } else {
            document.querySelector(`#blue${randomNum}`).src = `photo/${parseInt(heroicon)+1}.png`;
        }
        
        
      
    }
    

    // for player 2


    if ( x === "Player2") {
        let heroicon = document.querySelector(`#red${randomNum}`).src.substr(-5, 1);
        if(heroicon > 8) {
            document.querySelector("#playerNumber").textContent = "Player2";

            document.getElementById("fight").style.display = "none";
            document.getElementById("kill").style.display = "flex";

            document.querySelector("#kill").addEventListener("click", killOppositeHero) ;

            function killOppositeHero() {
                let generateNumber = Math.floor(Math.random() * 10);
                let randomNum ;
                if (generateNumber % 2 == 0) {
                    randomNum = generateNumber + 1;
                } else {
                    randomNum = generateNumber;
                }

                document.querySelector(`#blue${randomNum}`).src = "photo/10.png";
                document.querySelector(`#red${randomNum}`).src = "photo/6.png"; 

                document.getElementById("fight").style.display = "flex";
                document.getElementById("kill").style.display = "none";
            }                                                               
        } else {
            document.querySelector(`#red${randomNum}`).src = `photo/${parseInt(heroicon)+1}.png`;
        }
        
        
      
    }

    GetNumberAndTurn(randomNum);

    

}

// For any better alogrithm or idea
// Please teach me throught the following email
// " thuriyac4@gmail.com"