function telephoneCheck(str) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
      }
    
    
telephoneCheck("555-555-5555");

/* ^ start 
    (1\s?) groups is composed of character 1 then \S for whitespace and ? to repeat as needed
    then whole groups gets ? to repeat 
    (\(\d{3}\)|\d{3}) second group with | for or 
        \(\d{3}\) matches (555) 
        \d{3} matches 555
    [\s\-] matches with whitespace or - 
        ? to repeat
    \d{3} matches 555
    whitespace + repeat again
    \d{4} matches 5555
    $ end
