const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

var time = document.getElementsByClassName("opentime")[0].innerText;
console.log(time);

let countDown = new Date(time).getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerHTML = Math.floor(distance / day)),
      (document.getElementById("hours").innerHTML = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerHTML = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerHTML = Math.floor(
        (distance % minute) / second
      ));
  }, second);
