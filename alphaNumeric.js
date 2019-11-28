const alphaNumeric = word => {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let letterList = word.split('');
    let letter;
    let total = 0;
    for( letter of letterList ) {
      total += ( alphabets.indexOf(letter) + 1 );
    }
  
    return total;
  }
  
  alphaNumeric('melody');