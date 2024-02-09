class Card {
  constructor(container, cardNumber, cardsOpen, count) {
    this.container = container;
    this.cardNumber = cardNumber;
    this.cardsOpen = cardsOpen;
    this.count = count;
  }

  flip(firstCard, secondCard) {
    console.log(firstCard);
    console.log(secondCard);
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.innerHTML !== secondCard.innerHTML) {
        firstCard.classList.remove("open");
        secondCard.classList.remove("open");

        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add("success");
        secondCard.classList.add("success");
        firstCard.classList.remove("open");
        secondCard.classList.remove("open");
      }
    }

    if (document.querySelectorAll(".card.success").length === this.count) {
      alert("WIN");
    }
  }

  newCard() {
    const cards = document.createElement("div");
    cards.classList.add("card");
    cards.innerHTML = this.cardNumber;
    cards.addEventListener("click", () => {
      cards.classList.add("open");
      console.log(this.cardsOpen);
      if (this.cardsOpen.length === 2) {
        setTimeout(() => {
          this.flip(this.cardsOpen[0], this.cardsOpen[1]);
        }, 500);
      }
    });

    this.container.append(cards);
  }
}



class AmazingCard extends Card {
  constructor(container, cardsOpen, count, cardNumber) {
    super(container, count);
    this.cardNumber = `<img src="./img/${cardNumber}.jpg" alt="${cardNumber}"></img>`;
    this.cardsOpen = cardsOpen;
  }


}


(() => {
  let cardsOpen = document.getElementsByClassName("open"),
    game = document.getElementById("game"),
    block = document.getElementById("block"),
    timer = 60,
    interval;
  const outputTimer = document.querySelector(".timer");
  outputTimer.innerHTML = 0;
  console.log(cardsOpen);
  let form = document.createElement("form");
  let buttonTwo = document.createElement("button");
  let buttonFour = document.createElement("button");
  let buttonSix = document.createElement("button");
  let buttonEight = document.createElement("button");
  let buttonTen = document.createElement("button");
  let buttonWrapper = document.createElement("div");
  let button = document.createElement("button");

  form.classList.add("input-group", "mb-3");
  buttonWrapper.classList.add("input-group-append");
  buttonTwo.classList.add("btn", "btn-primary");
  buttonFour.classList.add("btn", "btn-primary");
  buttonSix.classList.add("btn", "btn-primary");
  buttonEight.classList.add("btn", "btn-primary");
  buttonTen.classList.add("btn", "btn-primary");
  button.classList.add("btn", "btn-primary");
  buttonTwo.textContent = "2x2";
  buttonFour.textContent = "4х4";
  buttonSix.textContent = "6х6";
  buttonEight.textContent = "8х8";
  buttonTen.textContent = "10х10";
  button.textContent = "Начать игру";

  button.setAttribute("disabled", true);
  buttonEight.setAttribute("disabled", true);// Пока не добавятся картинки, будет недоступно "Нужно боооольше картинок"
  buttonTen.setAttribute("disabled", true);// Пока не добавятся картинки, будет недоступно "Нужно боооольше картинок"
  buttonSix.setAttribute("disabled", true);// Пока не добавятся картинки, будет недоступно "Нужно боооольше картинок"

  let difficult = 0,
    countDificult = 0;
  buttonTwo.addEventListener("click", function (e) {
    e.preventDefault();
    let btnSuccess = document.querySelector(".btn-success");
    if (countDificult === 0) {
      buttonTwo.classList.add("btn-success");
      difficult = 2;
      countDificult++;
    } else {
      btnSuccess.classList.remove("btn-success");
      buttonTwo.classList.add("btn-success");
      difficult = 2;
    }
    if (difficult > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  });
  buttonFour.addEventListener("click", function (e) {
    e.preventDefault();
    let btnSuccess = document.querySelector(".btn-success");
    if (countDificult === 0) {
      buttonFour.classList.add("btn-success");
      difficult = 4;
      countDificult++;
    } else {
      btnSuccess.classList.remove("btn-success");
      buttonFour.classList.add("btn-success");
      difficult = 4;
    }
    if (difficult > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  });
  buttonSix.addEventListener("click", function (e) {
    e.preventDefault();
    let btnSuccess = document.querySelector(".btn-success");
    if (countDificult === 0) {
      buttonSix.classList.add("btn-success");
      difficult = 6;
      countDificult++;
    } else {
      btnSuccess.classList.remove("btn-success");
      buttonSix.classList.add("btn-success");
      difficult = 6;
    }
    if (difficult > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  });
  buttonEight.addEventListener("click", function (e) {
    e.preventDefault();
    let btnSuccess = document.querySelector(".btn-success");
    if (countDificult === 0) {
      buttonEight.classList.add("btn-success");
      difficult = 8;
      countDificult++;
    } else {
      btnSuccess.classList.remove("btn-success");
      buttonEight.classList.add("btn-success");
      difficult = 8;
    }
    if (difficult > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  });
  buttonTen.addEventListener("click", function (e) {
    e.preventDefault();
    let btnSuccess = document.querySelector(".btn-success");
    if (countDificult === 0) {
      buttonTen.classList.add("btn-success");
      difficult = 10;
      countDificult++;
    } else {
      btnSuccess.classList.remove("btn-success");
      buttonTen.classList.add("btn-success");
      difficult = 10;
    }
    if (difficult > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
    console.log(difficult);
  });

  if (difficult > 0) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }

  buttonWrapper.append(buttonTwo);
  buttonWrapper.append(buttonFour);
  buttonWrapper.append(buttonSix);
  buttonWrapper.append(buttonEight);
  buttonWrapper.append(buttonTen);
  buttonWrapper.append(button);
  form.append(buttonWrapper);
  block.append(form);

  function app() {
    button.addEventListener("click", function (e) {
      let count = Math.pow(difficult, 2);

      function newGame(cardsCount) {
        let cardsNumberArray = [];
        let cardsArray = [];


        for (let i = 1; i <= cardsCount / 2; i++) {
          cardsNumberArray.push(i);
          cardsNumberArray.push(i);
        }

        cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

        for (const cardNumber of cardsNumberArray) {
          const card = new AmazingCard(game, cardsOpen, count, cardNumber);
          cardsArray.push(card.newCard());
        }
      }
      newGame();

      function countTimer() {
        if (outputTimer.innerHTML > 0) {
          outputTimer.innerHTML--;
        } else {
          clearInterval(interval);
          game.innerHTML = "";
          alert("LOSE");
        }
      }
      function startTimer() {
        outputTimer.innerHTML = timer;
        clearInterval(interval);
        interval = setInterval(countTimer, 1000);
      }

      game.innerHTML = "";
      // эта строчка необходима, чтобы предотвратить стандартное действие браузера
      // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
      e.preventDefault();

      document.getElementById("block").style.width = difficult * 90 + 80 + "px";

      newGame(count);
      startTimer();
    });
  }

  app();
})();
