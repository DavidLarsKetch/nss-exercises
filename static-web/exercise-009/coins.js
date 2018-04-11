function coinCounter (val) {
  // Initialize a JavaScript object to hold the coins
  const coinData = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  const coinPurse = {
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  let val100 = val * 100; //Javascript is bad at decimals, converts dollar amount to integer

  for (let i in coinData) {
    while ((val100 - coinData[i]) >= 0) {
      val100 -= coinData[i];
      coinPurse[i]++;
    }
  }

  return coinPurse;
}

var coins = coinCounter(1.27);
console.log(coins);
