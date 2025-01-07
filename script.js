const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totalSpan = document.getElementById("total")
const tipSpan= document.getElementById("tiptotal")

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2); 
    const tipAmount = billValue * (tipValue / 100);
    tipSpan.innerText = tipAmount.toFixed(2);
}


btnEl.addEventListener("click", calculateTotal)