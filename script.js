document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const button = document.getElementById("btn");
  const output = document.getElementById("output");

  // Function to introduce a delay using async/await
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  button.addEventListener("click", async () => {
    const text = textInput.value;
    const delayTime = parseInt(delayInput.value, 10);

    if (!text || isNaN(delayTime) || delayTime < 0) {
      output.innerText = "Please enter valid text and delay.";
      return;
    }

    output.innerText = "Waiting...";
    await delay(delayTime);
    output.innerText = text;
  });
});
