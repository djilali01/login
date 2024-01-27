const inputs = document.querySelectorAll("input");
const submit = document.querySelector("input[type='submit']");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission to see the values logged

  inputs.forEach((input, index) => {
    const image = document.getElementById(`image${index + 1}`);
    const lable = document.getElementById(`lable${index + 1}`);
    // Validation
    if (input.value.trim() === "") {
      input.style.border = "1px solid red";
      image.style.display = "inline"; // Display error icon
      lable.style.display = "inline";
    } else {
      input.style.border = "1px solid #ccc";
      image.style.display = "none";
      lable.style.display = "none"; // Hide error icon
    }
  });
});
