const adviceID = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

function getAdvice(){
fetch("https://api.adviceslip.com/advice")
     .then(response =>{
        return response.json();
     })
     .then(date => {
        const advice = date.slip.advice;
        adviceID.textContent = date.slip.id;
        adviceText.innerHTML = `<p> ${advice} </p>`;
     })
     .catch(err=> console.log(err))
   }

window.onload = () => {
   getAdvice();
}  ;