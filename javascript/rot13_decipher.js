function rot13(str) {
    // declaring a string containing the normal alphabet
    const  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // declaring a string containing the alphabet after rot13 has been applied to it 
    const codedAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";


    //declaring the decoded string using the coded one as basis
    let decodedStr = str
                        /*using replace with a regex to select all letters. We then use their index number
                        to access the same letter in the decoded alphabet*/
                        .replace(/[A-Z]/g, codedLetter => alphabet[codedAlphabet.indexOf(codedLetter)]);

    //logging the result to test
    console.log(decodedStr); 
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
