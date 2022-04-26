function palindrome(str) {
    let strFormat = str
                    .toLowerCase() //lowercasing the whole str
                    .replace(/[\s-():_.,/]/g, "") // replacing non-alphanumerics with an empty string  
                    .split(""); // transform to an array to use reverse()
    // looking at the string for conveniance
    console.log(strFormat);
    // comparing a string to its reverse
    return strFormat.toString() === strFormat.reverse().toString();
 }
 
 palindrome("1 eye for of 1 eye.")