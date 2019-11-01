const newPar = () => {
    const parElement = document.querySelectorAll('.par');
      for( i of parElement ) {
          const para = i.textContent = 'Function was called';
      }
      return para;
    }
    
document.addEventListener('DOMContentLoaded', newPar);