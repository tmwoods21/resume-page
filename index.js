// index.js

import Contact from "./Contact.js";

// var number = 5;
// let name = "taylor";

// number = 12;
// name = "Pluralsight ";

// // writing to the document
// document.writeln(name + number);
// alert("hello world");

let hasJob = true;
if (hasJob) {
    // have a job
    showMessage("Thanks for visiting, I'm currently employed.")
}else {
    // need a job
    showMessage("Please look around, I'm currently looking for a positon.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my returning your email.");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const first = "first";

const contactForm = document.getElementById("contactForm"); 
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #808080;";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}

