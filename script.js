const counterNums =  document.querySelectorAll(".numes");

let counter = 0;

let time = setInterval(() => {
  counter++;

  counterNums.forEach(num =>{
  num.textContent = counter;
  
})

if(counter>=2000){
  clearInterval(time)
}
}, 1);