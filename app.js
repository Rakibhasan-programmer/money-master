document.getElementById('calculateExpence').addEventListener('click', function(){
    // Net Income
    let incomeInput = document.getElementById("netIncome");
    let income = parseFloat(incomeInput.value);

    // Expences
    let food = document.getElementById("food");
    let foodValue = parseFloat(food.value);
    let rent = document.getElementById("rent");
    let rentValue = parseFloat(rent.value);
    let cloth = document.getElementById("cloth");
    let clothValue = parseFloat(cloth.value);

    let totalExpence = foodValue + rentValue + clothValue;

    // total expence
    let expences = document.getElementById("totalExpence");
    expences.innerText = totalExpence;
    // balance
    let balance = document.getElementById("balance");
    let mainBalance = income - totalExpence;
    balance.innerText = mainBalance;
    

    // clear input
    incomeInput.value = "";
    food.value = "";
    rent.value = "";
    cloth.value = "";
})

// document.getElementById("save").addEventListener('click', function(){

// })

// saving amount
// let saveAmount = document.getElementById("save");
// let saveAmountValue = parseFloat(saveAmount.value);

// let savingAmount = (income * saveAmountValue) / 100;

// let savings = document.getElementById("savingAmount");
// savings.innerText = savingAmount;

// let remainingBalance = document.getElementById("remainingBalance");
// let remainingBalanceValue = mainBalance - savingAmount;
// remainingBalance.innerText = remainingBalanceValue;