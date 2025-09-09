const nums = document.querySelectorAll(".num-one");

const totalDuration = 4000;
const timeInterval = 10;
const totalSteps = totalDuration/timeInterval;

nums.forEach(num=>{
  let counter = 0;

  const attributeValue = parseInt(num.getAttribute("data-attribute"));

  const interval = setInterval(()=>{
    counter++;
    const progress = Math.min(Math.floor((attributeValue/totalSteps)*counter), attributeValue)

    num.textContent = `${progress}+`

    if(counter>= totalSteps){
      clearInterval(interval)
    }
  }, timeInterval)
})