// Get the elements from the DOM

const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

// Calculate the BMI
function calculateBMI() {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; // Height is in cm, convert to meters

  // Calculate BMI
  const bmi = weight / (height * height);

  // Display the result
  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
}

// Add a click event listener to the calculateBtn
calculateBtn.addEventListener('click', calculateBMI);