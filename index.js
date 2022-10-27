var initialPrice = document.querySelector('#initial-price')
var numberOfStocks = document.querySelector('#number-of-stocks')
var currentPrice = document.querySelector('#current-price')
var tellMe = document.querySelector('#tell-me')



tellMe.addEventListener('click',submitHandler)

function submitHandler() {
    var ip = initialPrice.value;
    var qty = numberOfStocks.value;
    var curr = currentPrice.value;;

    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initialPrice,numberOfStocks,currentPrice) {
    if(initialPrice > currentPrice)
    {
        var loss = (initialPrice - currentPrice) * numberOfStocks;
        var lossPercentage = (loss/initialPrice) / 100;
        console.log(`Hey the loss is ${loss} and loss percentage is ${lossPercentage}`);
    }
    else if(initialPrice < currentPrice)
    {
        var profit = (currentPrice - initialPrice) * numberOfStocks;
        var profitPercentage = (profit  /initialPrice) * 100;
        console.log(`Hey the profit is ${profit} and profit percentage is ${profitPercentage}`);
    }
    else{
        console.log("No Profit No Loss");
    }
}

// calculateProfitAndLoss(10,10,10.2)