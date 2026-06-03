function generateName(event) {
  event.preventDefault();

  new Typewriter("#name", {
    strings: "Aurora 🌸",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let nameFormElement = document.querySelector("#name-generator-form");

nameFormElement.addEventListener("submit", generateName);
