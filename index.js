const clock = document.querySelector(".clock");
const para = document.querySelector("p");

const time = () => {
  const currTime = new Date();
  const pastTime = new Date("july 1 2022 9:50:50");

  const pastSec = (currTime.getTime() - pastTime.getTime()) / 1000;
  const d = Math.floor(pastSec/60/60/24);

  const h = currTime.getHours();
  const m = currTime.getMinutes();
  const s = currTime.getSeconds();

  const html1 = `
    This clock was created ${d} days ago
  `;

  const html2 = `
   <span>${h}</span> : 
   <span>${m}</span> : 
   <span>${s}</span>
  `;

  para.innerHTML = html1;
  clock.innerHTML = html2;
};

setInterval(time, 1000);