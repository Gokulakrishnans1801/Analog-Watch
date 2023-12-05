setInterval(function () {
  let date = new Date();
  let Hour = date.getHours();
  let Minute = date.getMinutes();
  let Seconds = date.getSeconds();

  let hour=document.getElementById("hour");
  let minute = document.getElementById("minute");
  let seconds=document.getElementById("seconds");

  hour.style.transform = `translate(-50%) 
    rotate(${Hour * 30 + Minute / 2}deg)`;
  minute.style.transform = `translate(-50%) 
  rotate(${Minute * 6}deg)`;
  seconds.style.transform = `translate(-50%) 
  rotate(${Seconds * 6}deg)`;
}, 1000);
