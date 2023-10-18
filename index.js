const numOfPixels = 30;

// Select the container div
const container = document.getElementById("textboarder");

// Loop to create and append elements
for (let i = 0; i < numOfPixels; i++) {
    const divFirstLine = document.createElement("div");
    divFirstLine.className = "firstLine";
    container.appendChild(divFirstLine);
}

for (let j = 0; j < numOfPixels; j++) {
    const divSecondLine = document.createElement("div");
    divSecondLine.className = "secondLine";
    container.appendChild(divSecondLine);
}