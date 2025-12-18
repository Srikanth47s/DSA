var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length; i++){
        if((prices[i]-min) > maxProfit){
            maxProfit = (prices[i]-min);
        }
        if(min > prices[i]){
            min = prices[i];
        }
    }  
    return maxProfit;  
};

let prices = [7,1,2,6,4,7];

console.log(maxProfit(prices))