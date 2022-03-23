"use strict";

const timeDay = document.querySelector(".time-day");
const weekDay = document.querySelector("span");
const time = document.querySelector(".time");
const happyNewYear = document.querySelector(".remained");

const timer = () => {
  const currentTime = new Date();

  const date = currentTime.getTime();
  const dateStop = new Date("1 january 2023").getTime();
  const timeRemaining = (dateStop - date) / 1000;
  const newYear = Math.floor(timeRemaining / 60 / 60 / 24);

  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  const dayOfWeek = new Date().toLocaleDateString("ru-RU", { weekday: "long" });

  // const days = currentTime.getDay();

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hour = hour < 10 ? "0" + hour : hour;
  time.innerHTML = hour + " : " + minutes + " : " + seconds;

  if (hour <= 6) {
    timeDay.textContent = "Доброй ночи!";
  } else if (hour <= 12) {
    timeDay.textContent = "Доброе утро!";
  } else if (hour <= 18) {
    timeDay.textContent = "Добрый день!";
  } else if (hour <= 23) {
    timeDay.textContent = "Добрый вечер!";
  }

  weekDay.innerHTML = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
  happyNewYear.innerHTML = newYear;

  setTimeout(timer, 1000);
};

timer();
