const textEl = document.getElementById("textarea");
const totalChar = document.getElementById("total-counter");
const remainingChar = document.getElementById("remaining-counter")

textEl.addEventListener("keyup",(event)=>{
   updateCounter();
})

updateCounter();

function updateCounter(){
    totalChar.innerText = textEl.value.length;

    remainingChar.innerText = textEl.getAttribute("maxLength")- textEl.value.length;
}
