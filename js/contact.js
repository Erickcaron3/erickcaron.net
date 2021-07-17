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


const form = document.querySelector("form");
const formElements = document.querySelectorAll("form");
const submit = document.querySelector(".submit");
const firstName = document.querySelector(".firstName");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const prefix = document.querySelector(".prefix");
const phoneNumber = document.querySelector(".phoneNumber");
const textarea = document.querySelector(".textarea");

console.log(form);

function isText(input){
    const regex =/^[A-Za-z]+$/;
    if(input.match(regex)){
        return true;
    }
}

submit.addEventListener("click", function(event){
    event.preventDefault();
    const isFormCorrectlyFilled = true; 

    if(!isText(firstName)){
        
        firstName.style.borderColor ="red";
        isFormCorrectlyFilled = false;

    }

    if(isText(surname)){
        isFormCorrectlyFilled = false;
    } else{

    }
    

    if(isFormCorrectlyFilled){
        form.submit();
    }
});