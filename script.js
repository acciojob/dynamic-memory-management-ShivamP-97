const limit = 50;
let elements = [];
const container = document.getElementById("container");
const memoryDisplay = document.getElementById("memory-usage");

const generateElements = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 10000; i++) {
    const div = document.createElement("div");
    div.textContent = `Element ${i + 1}`;
    div.className = "generated-element";
    fragment.appendChild(div);
    elements.push(div);
  }

  container.appendChild(fragment);
  updateMemoryUsage();
};

const removeElements = () => {
  elements.forEach((el) => container.removeChild(el));
  elements = [];
  updateMemoryUsage();
};

const updateMemoryUsage = () => {
  if (performance && performance.memory) {
    const usedMB = performance.memory.usedJSHeapSize / 1024 / 1024;
    memoryDisplay.textContent = `Memory Usage: ${usedMB.toFixed(2)} MB`;

    if (usedMB > limit) {
      alert(
        `Memory usage has exceeded ${limit} MB. Please optimize your actions to reduce memory consumption.`
      );
    }
  } else {
    memoryDisplay.textContent = "Memory usage info not available in this browser.";
  }
};

document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

setInterval(updateMemoryUsage, 1000);
