// Complete the js code

const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  // complete the function
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  // complete the function
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
