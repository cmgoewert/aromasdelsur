$('#contactForm').submit(function () {
    sendEmail();
    return false;
   });


function sendEmail() {
    var email = document.getElementById("emailInput").value;
    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageInput").value;
    document.getElementById("contactConfirmation").style.visibility = "visible";

    console.log(email + name + message);

    // messages.push({
    //     from: email,
    //     name: name,
    //     text: message 
    // });

    // console.log(messages);
    // setMessages(messages);
    
}