const nums = document.querySelectorAll(".num-one");

const totalDuration = 4000;
const totalTime = 10;
const totalSteps = totalDuration/totalTime;

nums.forEach(num=>{
  let counter = 0;
  const targetValue = parseInt(num.getAttribute("data-attribute"), 10);

  const interval = setInterval(() => {
    counter++;

    const progress = Math.min(Math.floor((targetValue/totalSteps)*counter), targetValue);

    num.textContent = `${progress}+`;

    if(counter>=totalSteps){
      clearInterval(interval)
    }
  }, totalTime);

})