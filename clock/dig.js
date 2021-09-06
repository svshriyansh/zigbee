function generateTimeInfo(){
  const dateObj = new Date();
   hrs = dateObj.getHours();
   min = dateObj.getMinutes();
  var sec = dateObj.getSeconds();
  if (sec< 9){
    sec = `0${sec}`
  }
  if (min< 9){
    min = `0${min}`
  }
  if (hrs< 9){
    hrs = `0${hrs}`
  }
  document.getElementsByClassName('hour')[0].innerHTML = hrs
  document.getElementsByClassName("min")[0].innerHTML = min
  document.getElementsByClassName("sec")[0].innerHTML = sec
}
setInterval(generateTimeInfo,10)