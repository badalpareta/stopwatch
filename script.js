const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const reset_btn = document.querySelector('#stop_btn');

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
    interval = setInterval(showTime, 1000);
    stop_btn.removeAttribute("disabled");
    pause_btn.removeAttribute("disabled");
    start_btn.setAttribute("disabled","true");
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval=null;
    pause_btn.innerHTML="continue";
  } else {
    interval=setInterval(showTime, 1000);
    pause_btn.innerHTML="pause";
  }
}

function stop() {
  start_btn.removeAttribute("disabled");
  pause_btn.setAttribute("disabled","true");
  stop_btn.setAttribute("disabled","true");
  clearInterval(interval);
  interval=null;
  pause_btn.innerHTML = 'pause';
  time = 0;
  timer.innerHTML = toHHMMSS(time);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}