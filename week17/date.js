function formatDate(date) {
    let time = new Date() - date; 

    if (time < 1000) { 
      return 'прямо сейчас';
    }

    let sec = Math.floor(time / 1000); 
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(time / 60000); 
    if (min < 60) {
      return min + ' мин. назад';
    }
  
  
    let D = date;
    D = [
      '0' + D.getDate(),
      '0' + (D.getMonth() + 1),
      '' + D.getFullYear(),
      '0' + D.getHours(),
      '0' + D.getMinutes()
    ].map(component => component.slice(-2)); 
    return D.slice(0, 3).join('.') + ' ' + D.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); 
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); 
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
  
  alert( formatDate(new Date(new Date - 86400 * 1000)) );