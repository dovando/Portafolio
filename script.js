//CONTACT FORM 
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name.trim() === "") {
            alert("Please enter your name.");
            document.getElementById("name").focus();
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            document.getElementById("email").focus();
            return;
        }

        if (message.trim() === "") {
            alert("Please enter your message.");
            document.getElementById("message").focus();
            return;
        }

        alert("Thank you " + name + "! Your message has been sent successfully.");
        this.reset();
    });
}

function calculateShipping() {
    let destination = document.getElementById("destination").value;
    let boxes = parseInt(document.getElementById("boxes").value);

    let pricePerBox = 0;

    if (destination === "local") {
        pricePerBox = 10;
    } else if (destination === "na") {
        pricePerBox = 25;
    } else if (destination === "eu") {
        pricePerBox = 40;
    } else if (destination === "asia") {
        pricePerBox = 55;
    }

    let total = pricePerBox * boxes;

    alert("Shipping from Vancouver\nTotal cost: $" + total.toFixed(2) + "\nDo not include delivery charges.");
}