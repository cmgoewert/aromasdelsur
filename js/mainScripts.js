var messages;
var slideIndex = Math.floor(Math.random() * 29);

function populateSlideshow() {
    var innerHTMLstring = ""
    for(var i = 0; i < 30; i++){
        innerHTMLstring += "<img class='mySlides w3-animate-bottom' src='images/slideshow/"+(i+1) +".jpg' />"
    }

    innerHTMLstring += "<div class='w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle' style='width:100%'><div class='w3-left w3-hover-text-khaki' onclick='plusDivs(-1)'>&#10094;</div><div class='w3-right w3-hover-text-khaki' onclick='plusDivs(1)'>&#10095;</div>";
    for(var i = 0; i < 30; i++){
        innerHTMLstring+= "<span class='w3-badge demo w3-border w3-transparent w3-hover-white' onclick='currentDiv("+(i+1)+")'></span>";
    }



    document.getElementById("slideshow").innerHTML = innerHTMLstring;
    
    showDivs(slideIndex);
    carousel();
}

function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
  }



function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

$('#contactForm').submit(function () {
    sendEmail();
    return false;
   });

function getData () {
    getMessages(function(data){
        messages=data;
        console.log(messages);
    });
}


function sendEmail() {
    var email = document.getElementById("emailInput").value;
    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageInput").value;
    document.getElementById("contactConfirmation").style.visibility = "visible";

    console.log(email + name + message);

    messages.push({
        from: email,
        name: name,
        text: message 
    });

    console.log(messages);
    setMessages(messages);
    
}