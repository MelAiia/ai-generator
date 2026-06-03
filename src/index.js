function displayNames(response) {
  new Typewriter("#name", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateNames(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "4aof9ee43493t03092f5abdcf7d5bf5d";

  let prompt = `Generate 10 creative nicknames for ${userInput.value}`;

  let context =
    "You are a creative nickname generator AI. Generate 10 short, stylish nicknames. Put each nickname on a new line using <br /> only. No numbers, no bullet points, no sentences, no markdown.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt,
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let resultElement = document.querySelector("#name");

  resultElement.innerHTML = "Generating nicknames... ⏳";

  axios.get(apiUrl).then(displayNames);
}

let formElement = document.querySelector("#name-generator-form");

formElement.addEventListener("submit", generateNames);
