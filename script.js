const nums = document.querySelectorAll(".num-one");

nums.forEach(num=>{
  let counter = 0;

  const limit = parseInt(num.getAttribute("data-attribute"));

  let interval = setInterval(() => {
    counter++;
    num.textContent = counter + "+";

    if(counter>=limit){
      clearInterval(interval);
    }
  }, 1);
})