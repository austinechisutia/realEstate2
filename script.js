const nums = document.querySelectorAll(".num-one");

nums.forEach(num=>{
let counter = 0;

  const limit = parseInt(num.getAttribute("data-attribute"));

  const ttlDurarion = 2000;
  const intervalTime = 10;
  const totalSteps = ttlDurarion/intervalTime;

  let interval = setInterval(() => {
    counter++;

    const progress = Math.min(Math.floor((limit/totalSteps)*counter), limit);

    num.textContent = progress + "+";

    if(counter>=limit){
      clearInterval(interval);
    }
  }, intervalTime);
})