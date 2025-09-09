const nums = document.querySelectorAll(".num-one");

const totalDuration = 4000;
const timeInterval = 10;
const totalTime = totalDuration/timeInterval;

nums.forEach(num=>{
  let counter = 0;

  const attribute = parseInt(num.getAttribute("data-attribute"), 10);
  
  const interval = setInterval(()=>{
    counter++;
    const progress = Math.min(Math.floor((attribute/totalTime)*counter), attribute);

    num.textContent = `${progress}+`;
  }, timeInterval)

  if(counter>=totalTime){
    clearInterval(interval)
  }
})