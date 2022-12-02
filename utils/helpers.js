module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  trimString: (passedString, start, end) =>{
    theString='';
    if (passedString.length > end){
      theString = passedString.substring(start,end)+'...';
    }else{
      theString = passedString ;
    }
    return theString;
  }
};
