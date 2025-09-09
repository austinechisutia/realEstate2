const nums = document.querySelectorAll(".num-one");

const totalDuration = 4000;
const timeInterval = 10;
const totalTime = totalDuration/timeInterval;

nums.forEach(num=>{
  let counter = 0;

  const dataAttribute = parseInt(num.getAttribute("data-attribute"));

  const interval = setInterval(()=>{
    counter++;

    const progress = Math.min(Math.floor((dataAttribute/totalTime)*counter), dataAttribute);

    num.textContent = `${progress}+`;

    if(counter>=totalTime){
      clearInterval(interval)
    }
  }, timeInterval)
})