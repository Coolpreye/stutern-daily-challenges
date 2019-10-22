const stringContainer = arr => {
    for (i = 0; i < arr[1].length; i++) {
      if(arr[0].toLowerCase().includes(arr[1].charAt(i).toLowerCase()) === false){
        return false;
      }
    }
     return true;
   }
   
   
   
   stringContainer(['hello', 'he']);
   
   
   