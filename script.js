const display = document.querySelector(".numes");


let counter = 0;

let interval = setInterval(()=>{
  counter++;
  display.textContent = counter;

  if(counter>=250){
    clearInterval(interval)
  }
}, 1)