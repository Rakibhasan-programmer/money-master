function netIncome(id){
    // Net Income
    let incomeInput = document.getElementById(id);
    let income = parseFloat(incomeInput.value);

    // clear input
    // incomeInput.value = "";
    return income;
}
// expences
function expences(){
    let income = netIncome("netIncome");
   // Expences
   let food = document.getElementById("food");
   let foodValue = parseFloat(food.value);
   let rent = document.getElementById("rent");
   let rentValue = parseFloat(rent.value);
   let cloth = document.getElementById("cloth");
   let clothValue = parseFloat(cloth.value);

   // checking validation
   if(income>=0 && foodValue>=0 && rentValue>=0 && clothValue>=0){
       let totalExpence = foodValue + rentValue + clothValue;
       // total expence
       let expences = document.getElementById("totalExpence");
       expences.innerText = totalExpence;
       // balance
       let balance = document.getElementById("balance");
       let mainBalance = income - totalExpence;
       balance.innerText = mainBalance;
   } else{
       document.getElementById("error").innerText = "Fields Can't be empty/negative";
   }
   // clear input
   food.value = "";
   rent.value = "";
   cloth.value = "";

}
document.getElementById('calculateExpence').addEventListener('click', function(){
    expences();
})

document.getElementById("savings").addEventListener("click", function(){

     // Net Income
     let income = netIncome("netIncome");

    // mainBalance
    let balance = document.getElementById("balance");
    let balanceValueText = balance.innerText;
    let mainBalance = parseFloat(balanceValueText);

    // saving amount
    let saveAmount = document.getElementById("save");
    let saveAmountValue = parseFloat(saveAmount.value);

    let savingAmount = ((income * saveAmountValue) / 100);

    let savings = document.getElementById("savingAmount");
    savings.innerText = savingAmount;

    let remainingBalance = document.getElementById("remainingBalance");
    let remainingBalanceValue = mainBalance - savingAmount;
    remainingBalance.innerText = remainingBalanceValue;

    // clear input
    saveAmount.value = "";
    document.getElementById("netIncome").value = "";
})

