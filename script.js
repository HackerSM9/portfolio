window.onload = function(){


  var pageTitle = document.title;
  var attentionMessage = "Come Back!";
  var blinkEvent = null;


  document.addEventListener('visibilitychange',function(e)
{  var isPageActive = !document.hidden;

  if(!isPageActive){
      blink();
  }else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
  }
});

function blink(){
  blinkEvent = setInterval(function(){
  if(document.title === attentionMessage){
      document.title = pageTitle;
  }else {
      document.title = attentionMessage;
  }
  },10);
  }
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}


function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}