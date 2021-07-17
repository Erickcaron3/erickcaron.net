const menuElements = document.querySelectorAll(".menu-elements");

for(let el of menuElements){

    el.addEventListener("mouseover", function(){
        el.style.color="grey";
    });

    el.addEventListener("mouseout", function(){
        el.style.color="inherit";
    });

}

function currentTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    hour = updateTime(hour);
    minute = updateTime(minute);
    seconde = updateTime(seconde);
    
    let clock = document.querySelector(".clock");
    clock.innerHTML = hour + " : " + minute + " : " + seconde;

    let t = setTimeout(function(){
        currentTime();
    }, 1000);
    
}

function updateTime(input){
    if (input < 10){
        return "0" + input;
    } else {
        return input;
    }
}

currentTime();   
