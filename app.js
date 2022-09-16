let game = ["ROCK", "PAPER", "SCISSORS"]
// let rock = document.getElementById("rock")
// let paper = document.getElementById("paper")
// let scissors = document.getElementById("scissors")
let btn = document.querySelectorAll(".btn input")
let situation = document.getElementById("status")
let pscore = document.getElementById("pscore")
let cscore = document.getElementById("cscore")
let numInput = document.getElementById("num")
let resetBtn = document.getElementById("reset")
let winningScoreDisplay = document.querySelector("p span");
let overall = document.getElementById("wins")

let p1score = 0;
let c1score = 0;
let winningScore = 5;
let gameOver = false;
//let wsc = parseInt(winscore.value) 
//var gameOver = false;


btn.forEach(bt => {
    bt.addEventListener('click', () => {
       let random = Math.floor(Math.random() * game.length);

       //ROCK
      if (bt.value === game[random] && !gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,It's A tie :|"
      }else if (bt.value === "ROCK" && game[random] === "PAPER") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,Computer Wins :("
          c1score+=1;
          if (c1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "Computer Won By " + c1score + " To " + p1score ;
          }
        cscore.innerHTML = c1score;
        }
      
      }else if (bt.value === "PAPER" && game[random] === "ROCK") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,So You Win :)"

          p1score+=1;
          if (p1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "You Won By " + p1score + " To " + c1score ;

          }
        pscore.innerHTML = p1score;
        }
      
      }else if (bt.value === "ROCK" && game[random] === "SCISSORS") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,So You Win :)"

          p1score+=1;
          if (p1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "You Won By " + p1score + " To " + c1score ;

          }
        pscore.innerHTML = p1score;
        }
      
       
      }else if (bt.value === "SCISSORS" && game[random] === "ROCK") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,Computer WinS :("

          c1score+=1;
          if (c1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "Computer Won By " + c1score + " To " + p1score ;

          }
        cscore.innerHTML = c1score;
        }
      }
      //PAPER
      else if (bt.value === "PAPER" && game[random] === "ROCK") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,So You Win :)"

          p1score+=1;
          if (p1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "You Won By " + p1score + " To " + c1score ;

          }
        pscore.innerHTML = p1score;
        }
      
      }else if (bt.value === "ROCK" && game[random] === "PAPER") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,Computer WinS :("

          c1score+=1;
          if (c1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "Computer Won By " + c1score + " To " + p1score ;

          }
        cscore.innerHTML = c1score;
        }
    
      }else if (bt.value === "PAPER" && game[random] === "SCISSORS") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,Computer Wins :("

          c1score+=1;
          if (c1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "Computer Won By " + c1score + " To " + p1score ;

          }
        cscore.innerHTML = c1score;
        }
       
      }else if (bt.value === "SCISSORS" && game[random] === "PAPER") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,So You Win :)"

          p1score+=1;
          if (p1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "You Won By " + p1score + " To " + c1score ;

          }
        pscore.innerHTML = p1score;
        }
      
      
      }
      //SCISSORS
      else if (bt.value === "SCISSORS" && game[random] === "ROCK") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,Computer Wins :("

          c1score+=1;
          if (c1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "Computer Won By " + c1score + " To " + p1score ;

          }
        cscore.innerHTML = c1score;
        }
        
      }else if (bt.value === "ROCK" && game[random] === "SCISSORS") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,So You Win :)"

          p1score+=1;
          if (p1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "You Won By " + p1score + " To " + c1score ;

          }
        pscore.innerHTML = p1score;
        }
      
      p1score+=1
        pscore.innerHTML = p1score;
      }else if (bt.value === "PAPER" && game[random] === "SCISSORS") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,Computer Wins :("

          c1score+=1;
          if (c1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "Computer Won By " + c1score + " To " + p1score ;

          }
        cscore.innerHTML = c1score;
        }
        
      }else if (bt.value === "SCISSORS" && game[random] === "PAPER") {
        if (!gameOver) {
        situation.innerHTML = "The Bot Played " + game[random] + " ,You Chose " + bt.value +  " ,So You Win :)"

          p1score+=1;
          if (p1score === winningScore) {
            gameOver = true;
            overall.innerHTML = "You Won By " + p1score + " To " + c1score ;

          }
        pscore.innerHTML = p1score;
        }
      
    
      }

    });
});

resetBtn.addEventListener("click", function() {
  reset();
});

function reset() {
  p1score = 0;
  c1score = 0;
  pscore.textContent = 0;
  cscore.textContent = 0;
  gameOver = false;
  situation.innerHTML = ' '
  overall.innerHTML = ''
}

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
