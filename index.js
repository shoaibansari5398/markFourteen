var initialPrice = document.querySelector('#initial-price')
var numberOfStocks = document.querySelector('#number-of-stocks')
var currentPrice = document.querySelector('#current-price')
var tellMe = document.querySelector('#tell-me')
var outputDiv=document.querySelector('#output-div');

function calculateProfitLoss(initial,qty,current)
{
    
    if(initial>current){
        var loss=(initial-current)*qty;
        var lossPercentage=(loss/initial)*100;
        outputDiv.innerText=`Your Loss is ${loss} and loss Percentage is ${lossPercentage}%`
    }
    else
        if(initial<current){
            var profit=(current-initial)*qty;
            var profitPercentage=(profit/initial)*100;
            outputDiv.innerText=`Your Profit is ${profit} and profit Percentage is ${profitPercentage}%`;
        }
    else
    {
        outputDiv.innerHTML="No Profit No Loss";
    }
}

function submitHandler(){
    var initial=Number(initialPrice.value) ;
    var qty=Number(numberOfStocks.value);
    var current=Number(currentPrice.value);
    if(initial>0&&qty>0&&current>0){
        calculateProfitLoss(initial,qty,current);
    }
    else{
        outputDiv.innerText="Please Enter Valid Amount";
    }  
}

tellMe.addEventListener('click',submitHandler);