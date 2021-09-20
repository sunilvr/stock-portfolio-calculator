const initialPrice = document.querySelector("#initial-price");
const stocksNumber = document.querySelector("#stocks-number");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");


/*Profit = (SellingPrice - CostPrice)
Profit Percentage = (Profit/CostPrice)*100
Loss = (CostPrice - SellingPrice)
Loss Percentage = (Loss/CostPrice)*100*/

function calculateProfitLoss(buyingPrice, numberOfStocks, sellingPrice){
  let profit = 0, profitPercentage = 0, loss = 0, lossPercentage = 0;

  if (buyingPrice > sellingPrice){
    // loss scenario
    loss = ((buyingPrice - sellingPrice) * numberOfStocks).toFixed(1);
    lossPercentage = ((loss/(buyingPrice * numberOfStocks))*100).toFixed(2);
    output.style.color = 'orange';
    output.innerText = `loss is ${loss} and loss percentage is ${lossPercentage}`;
  } else if (sellingPrice > buyingPrice){
    // profit scenario
    profit = ((sellingPrice - buyingPrice) * numberOfStocks).toFixed(1);
    profitPercentage = ((profit/(buyingPrice * numberOfStocks))*100).toFixed(2);
    output.style.color = 'green';
    output.innerText = `profit is ${profit} and profit percentage is ${profitPercentage}`;
  } else{
    //no loss and no profit
    output.innerText = `no gain no pain`;
  }
}

function clickHandler(){
  let buyingPrice = Number(initialPrice.value);
  let numberOfStocks = Number(stocksNumber.value);
  let sellingPrice = Number(currentPrice.value);

  if(buyingPrice && numberOfStocks && sellingPrice){
    calculateProfitLoss(buyingPrice, numberOfStocks, sellingPrice);
  }else{
    alert('Please fill out all the input fields');
  }
}

calculateButton.addEventListener('click',clickHandler)