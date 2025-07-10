const cell = document.querySelectorAll("#cell");
const resultText = document.getElementById("result-text");
const resetButton = document.getElementById("reset-button");

let currentPlayer = 1;
let counter = 0;
let strValue = "";
let boolValue = false;

function swithPlayerAndDispayValue(element) {
  if (currentPlayer == 1) {
    element.innerHTML = "x";
    currentPlayer = 2;
  } else {
    element.innerHTML = "o";
    currentPlayer = 1;
  }
  counter += 1;
  if (counter > 8 && boolValue) {
    playAudio("draw")
    alert("draw");
    currentPlayer = 1;
  }
  checkkWinners();
}

function checkkWinners() {
  for (let i = 0; i < 8; i++) {
    switch (i) {
      case 0:
        strValue = cell[0].innerHTML + cell[1].innerHTML + cell[2].innerHTML;
        break;
      case 1:
        strValue = cell[3].innerHTML + cell[4].innerHTML + cell[5].innerHTML;
        break;
      case 2:
        strValue = cell[6].innerHTML + cell[7].innerHTML + cell[8].innerHTML;
        break;
      case 3:
        strValue = cell[0].innerHTML + cell[3].innerHTML + cell[6].innerHTML;
        break;
      case 4:
        strValue = cell[1].innerHTML + cell[4].innerHTML + cell[7].innerHTML;
        break;
      case 5:
        strValue = cell[2].innerHTML + cell[5].innerHTML + cell[8].innerHTML;
        break;
      case 6:
        strValue = cell[0].innerHTML + cell[4].innerHTML + cell[8].innerHTML;
        break;
      case 7:
        strValue = cell[2].innerHTML + cell[4].innerHTML + cell[6].innerHTML;
        break;
      default:
        break;
    }
    if (strValue == "xxx") {
      playAudio("winner")
      alert("Player 1 won");
      cell.forEach((element) => {
        element.innerHTML = "";
      });
      boolValue = false;
    } else if (strValue == "ooo") {
      playAudio("winner")
      alert("Player 2 won");
      boolValue = false;
      cell.forEach((element) => {
        element.innerHTML = "";
      });
    }
  }
}

function playAudio(typeOfAudio) {
  const wrongAudio = new Audio("./audio/wrong.mp3");
  const winAudio = new Audio("./audio/win.mp3");
  const drawAudio = new Audio("./audio/draw.mp3");
  if (typeOfAudio == "winner") {
    winAudio.play();
  } else if (typeOfAudio == "wrong") {
    wrongAudio.play();
  } else {
    winAudio.play();
  }
}

cell.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.innerHTML == "") {
      swithPlayerAndDispayValue(elem);
    } else {
      playAudio("wrong")
    }
  });
});

resetButton.addEventListener("click", () => {
  cell.forEach((element) => {
    element.innerHTML = "";
    currentPlayer = 1;
  });
});
