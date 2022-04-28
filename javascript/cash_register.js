function checkCashRegister(price, cash, cid) {
    // declaring object with value pairs 
      const currencyValues = {
          "ONE HUNDRED": 10000,
          "TWENTY": 2000,
          "TEN": 1000,
          "FIVE": 500,
          "ONE": 100,
          "QUARTER": 25,
          "DIME": 10,
          "NICKEL": 5,
          "PENNY": 1,
        }
        // calculating change to give and initializing some variables
        let change = cash * 100- price * 100;
        console.log("c", change)
        let result = {status: "", change: []};
       
        //going through all currency values 
        for (let i = cid.length - 1; i >= 0; i--) {
        //variables used in this for loop
         let denomination = cid[i];
         let moneyAvail = denomination[1] * 100;
         let moneyGiven = 0;
         //verifying we have enough of the right denomination to pay once
         while (change >= currencyValues[denomination[0]] && moneyAvail >= currencyValues[denomination[0]]) {
             moneyAvail -= currencyValues[denomination[0]];
             change -= currencyValues[denomination[0]];
             moneyGiven += currencyValues[denomination[0]];
             console.log(moneyGiven);
         }// if there is money available we close the register otherwise it's open
         if (moneyAvail == 0) {
             result.status = "CLOSED";
         } else {
             result.status = "OPEN";
         }; // putting the money given in the result object
         if (moneyGiven > 0) {
             result.change.push([denomination[0], moneyGiven / 100]);
         };
      }// if change isn't entirely repaid then we didn't have enough money
      if (change > 0) {
          result.status = "INSUFFICIENT_FUNDS";
          result.change = [];
      }// looking if the register was closed and assigning the cid array to have the right format of output 
      else if(result.status === "CLOSED") {
          result.change = cid;
      }//returning the result object
      console.log("result", result);
      return result;
      
    }
  
     
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);