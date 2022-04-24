function convertToRoman(num) {
    let romStr = ""; // string used to store the roman numerals 
    
        while (num > 0) {   // while loop so we iterate until the number is 0 
            if (num >= 1000) {
                romStr += "M";
                num -= 1000;   // chaining else ifs to perform one substraction to the number while adding a sign to the Roman numeral string 
            } else if (num >= 900) {
                romStr += "CM";
                num -= 900;
            } else if (num >= 500) {
                romStr += "D";
                num -= 500;
            } else if (num >= 400) {
                romStr += "CD";
                num -= 400;
            } else if (num >= 100) {
                romStr += "C";
                num -= 100;
            } else if (num >= 90) {
                romStr += "XC";
                num -= 90;
            } else if (num >= 50) {
                romStr += "L";
                num -= 50;
            } else if (num >= 40) {
               romStr += "XL";
                num -= 40;
            } else if (num >= 10) {
                romStr += "X";
                num -= 10;
            } else if (num >= 9) {
                romStr += "IX";
                num -= 9;
            } else if (num >= 5) {
                romStr += "V";
                num -= 5;
            } else if (num >= 4) {
                romStr += "IV";
                num -= 4;
            } else if (num >= 1) {
                romStr += "I";
                num -= 1;
            }
        }
        return romStr;  // returning the full string 
       }
    
    
    convertToRoman(2);

