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

    // for player1
    let x = document.querySelector("#playerNumber").textContent;

    if ( x === "Player1") {
        let heroArray = [1, 3, 5, 7, 9];
        let heroIndex ;

        for (heroIndex in heroArray) {
            if (randomNum == heroArray[heroIndex]) {
                let heroicon = document.querySelector(`#blue${randomNum}`).src.substr(-5, 1);
                if(heroicon > 8) {
                    document.querySelector(`#blue${randomNum}`).src = "photo/6.png"; //ဒီကစ ပြင်
                    document.querySelector("#playerNumber").textContent = "Player1";
                    document.querySelector("button").addEventListener("click", killOppositeHero) ;

                    function killOppositeHero() {

                        let generateNumber = Math.floor(Math.random() * 10);
                        let randomNum ;
                        if (generateNumber % 2 == 0) {
                            randomNum = generateNumber + 1;
                        } else {
                            randomNum = generateNumber;
                        }
                    document.querySelector(`#red${randomNum}`).src = "photo/10.png";
                    }                                                               //ဒီထိ
                } else {
                    document.querySelector(`#blue${randomNum}`).src = `photo/${parseInt(heroicon)+1}.png`;
                }
        }
      }
    }
    

    // for player 2
    if ( x === "Player2") {
      let heroArray = [1, 3, 5, 7, 9];
      let heroIndex ;
      for (heroIndex in heroArray) {
        if (randomNum == heroArray[heroIndex]) {
          let heroicon = document.querySelector(`#red${randomNum}`).src.substr(-5, 1);
          if(heroicon > 8) {
            document.querySelector(`#red${randomNum}`).src = "photo/6.png";
          } else {
            document.querySelector(`#red${randomNum}`).src = `photo/${parseInt(heroicon)+1}.png`;
          }
        }
      }
    }

    GetNumberAndTurn(randomNum);

    

}

// For any better alogrithm or idea
// Please teach me throught the following email
// " thuriyac4@gmail.com"