// -------------------------------
// Part 1: Variables & Conditionals
// -------------------------------
let userName = prompt("What is your name?");
let userAge = parseInt(prompt("How old are you?"));

if (userAge >= 18) {
  document.getElementById("user-output").textContent =
    `Hello ${userName}, you are old enough to vote! ✅`;
} else {
  document.getElementById("user-output").textContent =
    `Hi ${userName}, sorry you are still too young to vote. ❌`;
}

// -------------------------------
// Part 2: Functions
// -------------------------------
function greetUser(name) {
  return `Welcome, ${name}! Glad you're here.`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

// Use greet function on button click
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("greetMsg").textContent = greetUser(userName);
});

// Example use of calculateTotal in console
console.log("Total cost:", calculateTotal(100, 3));

// -------------------------------
// Part 3: Loops
// -------------------------------
// For loop: Generate numbers 1–5
let list = document.getElementById("number-list");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Number ${i}`;
  list.appendChild(li);
}

// While loop: Countdown
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// -------------------------------
// Part 4: DOM Manipulation
// -------------------------------
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  let text = document.getElementById("dynamic-text");
  if (text.textContent.includes("change")) {
    text.textContent = "Nice! You toggled dark mode. 🌙";
  } else {
    text.textContent = "This text will change on click!";
  }
});
