const counters = document.querySelectorAll(".numes")

counters.forEach(counter => {
  let iterator = 0;
  const clasAll = parseInt(counter.getAttribute("data-limit"));
  
  let increse = setInterval(()=>{
    iterator++;
    counter.textContent = iterator + "+";

    if(iterator>=clasAll){
        clearInterval(increse)
    }

  })
});