const ball = document.querySelector("#ball");


ball.addEventListener("click", changeTheme);

let leftSide = true;
function changeTheme(){
    if(leftSide === true){
        ball.style.left = "40px";
        ball.style.backgroundColor="black";
        leftSide = false;
        document.querySelector(".mode").style.backgroundColor="white";
        document.querySelector("body").style.backgroundColor="black";

        text.textContent="Good nights";
        text.style.color="white";

        hour.style.color="white";
        minute.style.color="white";
        point.style.color="white";
    }else{
        ball.style.left = "5px";
        ball.style.backgroundColor="white";
        leftSide = true;
        document.querySelector(".mode").style.backgroundColor="black";
        document.querySelector("body").style.backgroundColor="white";

        text.textContent="Good morning";
        text.style.color="black";

        hour.style.color="black";
        minute.style.color="black";
        point.style.color="black";
    }
}

//-------------------

const point = document.querySelector(".point");

const hour =  document.querySelector(".hour");
hour.textContent=new Date().getHours();
if(hour.textContent < 10){
    hour.textContent = "0" + hour.textContent
}

const minute = document.querySelector(".minute");
minute.textContent=new Date().getMinutes();
if(minute.textContent < 10){
    minute.textContent = "0" + minute.textContent
}

//-------------------

const text = document.querySelector(".text");



