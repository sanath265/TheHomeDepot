function showTime(){
    let date = new Date();
    let hours = 24 - date.getHours();
    let minutes = 60 - date.getMinutes();
    let sec = 60 - date.getSeconds();
  if((minutes + '').length == 1){
    minutes = '0' + minutes;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
    
  document.querySelector("#time").innertext=  hours + ":"
  + minutes + ": " + sec;
    
    setTimeout(time,1000);
}

showTime();



let liEls = document.querySelectorAll('ul li');
let index = 0;

window.show = function(increase){
    index = index + increase;
    index = Math.min(
    Math.max(index,0),
    liEls.length-1
    );
    liEls[index].scrollIntoView({behavior:'smooth'});
}










setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#the-final-countdown p').html(hours+':'+min+':'+sec)
}, 1000);