const nums = document.querySelectorAll(".nums-one");

const totalDuration = 2000;
const totalTime = 10;
const totalSteps = totalDuration/totalTime;

nums.forEach(num=>{
  let counter = 0;
  const targetValue = parseInt(num.getAttribute("data-attribute"), 10);

  const interval = setInterval(() => {
    counter++;

    const progress = Math.min(Math.floor((targetValue/totalTime)*counter), totalDuration);

    num.textContent = progress;

    if(counter>=targetValue){
      clearInterval(interval)
    }
  }, totalTime);

})