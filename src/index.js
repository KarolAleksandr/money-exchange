// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

        let amount = { };
        if(currency > 10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        } else if(currency === 0) {
            return {};
        } else {
            let coins = {"H":50, "Q":25, "D":10, "N":5, "P":1};
            let money = currency;
            for(let key in coins) {
                let count = 0;
                if(money / coins[key] > 0) {
                    count = Math.floor(money / coins[key]);
                    money = money % coins[key];
                    if(count > 0) {
                        amount[key] = count;
                    }
                  }
                }
               return amount;
            }
          } 
    