const nums = document.querySelector(".num-one");

let counter = 0;

let interval = setInterval(()=>{
  counter++;
  nums.textContent = counter + "+";

  if(counter>=250){
    clearInterval(interval);
  }
}, 1)