const largestOfFour = (arr) => {
    let largestFour = [];
    
    for(let i = 0; i < arr.length; i++) {
      largestFour.push(Math.max(...arr[i]));
    }
    return largestFour;
  };
  
  largestOfFour([[5,7,8,90], [5,9,10,50]]);
   
  
  