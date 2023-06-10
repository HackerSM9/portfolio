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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);