const stringSpecials = word => {
    let chars = [];
    let i;
    
    for(i = 0; i < word.length; i++) {
      if(chars.includes(word.charAt(i)) ) {
        continue;
      }
      chars.push(word.charAt(i));
    }
    let specialChars = chars.join("");
    return specialChars;
  } 
  
  stringSpecials('Thequickbrownfoxjumpsoverthelazydog');