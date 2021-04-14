const message = document.getElementById("contact-message");


const handleMessageCount = () => {
    let msg = document.getElementById("contact-message").value;
    let msgCount = document.getElementById("message-count");
    let msgLength = msg.length;
    const maxLength = 1000;
    let charsRemaining = maxLength - msgLength;
    msgCount.innerText = charsRemaining; 
}

message.addEventListener("input", handleMessageCount);

const contactMessage = document.querySelector("success-message");
if (window.location.search.includes('success')){
    contactMessage.innerText = "Thanks for your message! I'll get back to you shortly.";
}