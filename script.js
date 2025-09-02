const numberrs = document.querySelectorAll(".numes");

numberrs.forEach(numberr=>{
    let value = 0;
    
    const numIncrease = parseInt(numberr.getAttributes("data-limit"))

    let interval = setInterval(()=>{
        value++;
        numIncrease.textContent = value;

        if(value>=numIncrease){
            clearInterval(interval);
        }
    }, 1)


})