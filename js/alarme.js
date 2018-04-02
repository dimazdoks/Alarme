var setH = null, setM = null;

setInterval(function() {
  let date = new Date();
  let curH =  date.getHours();
  let curM =  date.getMinutes();


  var time = document.getElementById("clock-wrapper");
  time.innerText = curH + ':' + curM;

}, 500);

var btn = document.getElementById("setalarm");

btn.addEventListener("click", (function() {
  setH = document.getElementById("hour").value;
  setM = document.getElementById("minutes").value;

  setH = Number(setH);
  setM = Number(setM);


  if (setH >= 0 && setH <= 24 && setM >= 0 && setM <= 60) {
    return;
  } else {
    alert("Введіть коректні данні!");
  }

}));


setInterval(function() {
  let date = new Date();
  let curH =  date.getHours();
  let curM =  date.getMinutes();

  console.log(setH + ':' + setM, curH + ':' + curM);

  let audio = document.getElementById("audio");

  audio.play();
  audio.pause();

  if (setH === curH && setM === curM) {

    audio.play();
    console.log("gggggg");
    alert("Alarme!");
    audio.pause();

    setH = null;
    setM = null;
  } else {
    console.log(setH + ':' + setM, curH + ':' + curM);
    console.log(typeof setH, typeof curH);
  }

}, 500);
