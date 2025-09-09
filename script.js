const nums = document.querySelectorAll(".num-one");


let counter = 0;
const totalDuration = 2000;
const intervalTime = 10;
const totalSteps = totalDuration/intervalTime;


nums.forEach(num=>{
    let interval = setInterval(()=>{
    counter++;
   

    const atribute = parseInt(num.getAttribute("data-attribute"));


    const progress = Math.min(Math.floor((atribute/totalSteps)*counter), atribute);

     num.textContent = progress + "+";

    if(counter>=totalSteps){
      clearInterval(interval);
    }
  }, intervalTime)
})