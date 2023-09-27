// let s; // пока пустая переменная
// let x = 0; // стартовое значение обратного отсчета
// countdown(); // вызов функции
// function countdown() {
//   // функция обратного отсчета
//   document.querySelector(".timet_item").innerHTML = x;
//   x--; // уменьшаем число на единицу
//   if (x > 60) {
//     clearTimeout(timer); // таймер остановится на нуле
//   } else {
//     s = setTimeout(countdown, 1000);
//   }
// }

all();

function all() {
  timer2();
  // timer();
  ModalOpen();
  sendForm();
}

//timer
// function timer() {
//   function getData() {
//     let elem_timer = document.querySelectorAll(".timet_item");

//     let today = new Date();
//     let arr_today = [
//       today.getDay(),
//       today.getHours(),
//       today.getMinutes(),
//       today.getSeconds(),
//     ];
//     for (let i = 0; i < arr_today.length; i++) {
//       elem_timer[i].textContent = arr_today[i];
//     }
//   }
//   let timer = setInterval(getData, 1000);
// }

//modal_open
function ModalOpen() {
  const modalWindow = document.querySelector(".modal");
  const butModal = document.querySelectorAll(".model_button");
  const modalClose = document.querySelector(".modal_close");

  butModal.forEach((item) => {
    item.addEventListener("click", () => {
      modalWindow.style.display = "flex";
    });
  });

  modalWindow.addEventListener("click", (e) => {
    const isModal = e.target.closest(".modal_inner");

    if (!isModal) {
      modalWindow.style.display = "none";
    }
  });

  modalClose.addEventListener("click", () => {
    modalWindow.style.display = "none";
  });
}

//server
function sendForm() {
  const form = document.querySelector(".modal");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      // метод для работы с серверными запросами(отправлять/принимать данные)
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
}

// timer

function timer2() {
  const hoursBlock = document.querySelector(".timer_hours");
  const minutesBlock = document.querySelector(".timer_minutes");
  const secondsBlock = document.querySelector(".timer_seconds");
  const daysBlock = document.querySelector(".timer_days");

  const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date("28 may 2022").getTime(); // милисекунды
    const timeRameining = (dateDeadline - date) / 1000;

    // const days = Math.floor(timeRameining / 60 / 60)
    const hours = Math.floor(timeRameining / 60 / 60);
    const minutes = Math.floor((timeRameining / 60) % 60);
    const seconds = Math.floor(timeRameining % 60);

    // const fDays = days < 10 ? "0" + days : days;
    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;

    // daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;
  };
  updateTimer();

  setInterval(updateTimer, 500);
}

let button = document.querySelectorAll(".button");

button.forEach((b) => {
  b.addEventListener("mouseover", () => {
    b.style.background = "rgba(193, 69, 127, 0.492)";
  });
  b.addEventListener("mouseout", () => {
    b.style.background =
      "linear-gradient(94.78deg, #df5950 11.19%, #451046 93.72%)";
  });
})




