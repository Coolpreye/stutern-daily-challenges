const getScore = arr => {
    let score = 0;
    let interval = 0;
    let level = 0;
    const points = [0,40,100,300,1200];
    
    for(i of arr) {
      if(interval < 10) {
        interval += i;
        score += points[i] * (level + 1);
      } 
      if(interval >= 10) {
        level++;
        interval = 0;
      }
    }
    return score;
  }
  
  
  getScore([4,2,2,3,3,4,2]);