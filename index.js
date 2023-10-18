const numOfPixelColumns = 30;
const numOfPixelRows = 10;

// Select the container div
const container = document.getElementById("textboarder");

// Loop to create and append elements
for (let i = 0; i < numOfPixelColumns; i++) {
    for (let j = 0; j < numOfPixelRows; j++) {
        const divFirstLine = document.createElement("div");
        divFirstLine.className = "pixelElement";
        divFirstLine.id="" + i + j;
        container.appendChild(divFirstLine);
    }
    
}