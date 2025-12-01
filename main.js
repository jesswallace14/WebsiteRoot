const button = document.querySelector("#greet-button");
const output = document.querySelector("#greet-output");

const greetings = [
  "Nice to see you here.",
  "Hope you're having an amazing day!",
  "Welcome aboard!",
  "Thanks for stopping by.",
  "Keep building great things.",
];

const randomGreeting = () =>
  greetings[Math.floor(Math.random() * greetings.length)];

button?.addEventListener("click", () => {
  if (!output) return;
  output.textContent = randomGreeting();
});
