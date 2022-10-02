let randomNum = Math.floor(Math.random() * 10);

console.log(randomNum);

if (randomNum % 2 === 0) {
    randomNum += 1;
}

console.log(randomNum)

// for player 1
// if (x === "Player1") {
    //   if (randomNum === 1) {
    //     let teamtest = document.querySelector("#blue1").src.substr(-5,1) ;
    //     if (teamtest > 8) {
    //       document.querySelector("#blue1").src = "photo/6.png";
    //     } else {
    //       document.querySelector("#blue1").src = `photo/${parseInt(teamtest)+1}.png`;
    //     }
    //   }

    //   if (randomNum === 3) {
    //     let teamtest = document.querySelector("#blue2").src.substr(-5,1) ;
    //     if (teamtest > 8) {
    //       document.querySelector("#blue2").src = "photo/6.png";
    //     } else {
    //       document.querySelector("#blue2").src = `photo/${parseInt(teamtest)+1}.png`;
    //     }
    //   }

    //   if (randomNum === 5) {
    //     let teamtest = document.querySelector("#blue3").src.substr(-5,1) ;
    //     if (teamtest > 8) {
    //       document.querySelector("#blue3").src = "photo/6.png";
    //     } else {
    //       document.querySelector("#blue3").src = `photo/${parseInt(teamtest)+1}.png`;
    //     }
    //   }

    //   if (randomNum === 7) {
    //     let teamtest = document.querySelector("#blue4").src.substr(-5,1) ;
    //     if (teamtest > 8) {
    //       document.querySelector("#blue4").src = "photo/6.png";
    //     } else {
    //       document.querySelector("#blue4").src = `photo/${parseInt(teamtest)+1}.png`;
    //     }
    //   }

    //   if (randomNum === 9) {
    //     let teamtest = document.querySelector("#blue5").src.substr(-5,1) ;
    //     if (teamtest > 8) {
    //       document.querySelector("#blue5").src = "photo/6.png";
    //     } else {
    //       document.querySelector("#blue5").src = `photo/${parseInt(teamtest)+1}.png`;
    //     }
    //   }
    // }