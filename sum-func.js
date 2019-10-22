const addUp = (a) => {
    let sum = 0;
    let i= 1;
    while(i <= a) {
      sum+=i;
      i++;
    }
    return sum;
  }
  
  addUp(8);