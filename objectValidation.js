const isJson = obj => {
    if(typeof(obj) === 'object') {
      return true;
    } else {
      return false;
    }
  }
  
  isJson({name: 'elvis'});