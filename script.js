const initialPrice = document.querySelector("#initial-price");
const stocksNumber = document.querySelector("#stocks-number");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");

function calculateProfitLoss(buyingPrice, numberOfStocks, sellingPrice){
  let profit = 0, profitPercentage = 0, loss = 0, lossPercentage = 0;

  if (buyingPrice > sellingPrice){
    // loss scenario
    loss = parseInt((buyingPrice - sellingPrice) * numberOfStocks);
    lossPercentage = parseInt((loss/(buyingPrice * numberOfStocks))*100);
    output.style.color = 'orange';
    output.innerText = `loss is ${loss} and loss percentage is ${lossPercentage}%`;
  } else if (sellingPrice > buyingPrice){
    // profit scenario
    profit = parseInt((sellingPrice - buyingPrice) * numberOfStocks);
    profitPercentage = parseInt((profit/(buyingPrice * numberOfStocks))*100);
    output.style.color = 'green';
    output.innerText = `profit is ${profit} and profit percentage is ${profitPercentage}%`;
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
