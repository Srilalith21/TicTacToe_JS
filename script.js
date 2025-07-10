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
    alert("draw");
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
      alert("player 1 won");
      cell.forEach((element) => {
        element.innerHTML = "";
      });
      boolValue = false;
    } else if (strValue == "ooo") {
      alert("player 2 won");
      boolValue = false;
      cell.forEach((element) => {
        element.innerHTML = "";
      });
    }
  }
}

cell.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.innerHTML == "") {
      swithPlayerAndDispayValue(elem);
    }
  });
});

resetButton.addEventListener("click", () => {
  cell.forEach((element) => {
    element.innerHTML = "";
  });
});
