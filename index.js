const numOfPixelColumns = 30;
const numOfPixelRows = 10;

// Select the container div
const container = document.getElementById("textboarder");

// Loop to create and append elements
for (let i = 0; i < numOfPixelRows; i++) {
    for (let j = 0; j < numOfPixelColumns; j++) {
        const divFirstLine = document.createElement("div");
        divFirstLine.className = "pixelElement";
        divFirstLine.id=String(i).padStart(2, '0') + String(j).padStart(2, '0');
        container.appendChild(divFirstLine);
    }
}

function illuminatePixel(pixelID) {
    document.getElementById(pixelID).classList.add('luminousPixel');
}

function darkenPixel(pixelID) {
    document.getElementById(pixelID).classList.remove('luminousPixel');
}