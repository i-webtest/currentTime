"use strict";

const timeDay = document.querySelector(".time-day");
const weekDay = document.querySelector("span");
const time = document.querySelector(".time");
const happyNewYear = document.querySelector(".remained");

const timer = () => {
  let currentTime = new Date();

  let dateStop = new Date("1 january 2023").getTime();
  let timeRemaining = (dateStop - currentTime) / 1000;
  let newYear = Math.floor(timeRemaining / 60 / 60 / 24);

  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let days = currentTime.getDay();

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
  }

  weekDay.innerHTML = dayOfWeek[days];
  happyNewYear.innerHTML = newYear;

  setTimeout(timer, 1000);
};
timer();
