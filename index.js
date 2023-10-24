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

/**
 * takes an Array with the IDs as String and
 * forwards it to the iluminatePixel function
 * in order to set a special color as background
 * color for the pixel.
 * illuminate(["0408", "0409", "0410", "0510", "0610", "0609", "0608", "0708", "0808", "0809", "0810", "0910"]);
 * @param {Array.String} pixelIdArray 
 */
function illuminate(pixelIdArray) {
    console.log(pixelIdArray);
    pixelIdArray.forEach(illuminatePixel);
}

/**
 * takes an Array with the IDs as String and
 * forwards it to the darkenPixel function
 * in order to set the normal background
 * color for the pixel
 * darken(["0408", "0409", "0410", "0510", "0610", "0609", "0608", "0708", "0808", "0809", "0810", "0910"]);
 * @param {Array.String} pixelIdArray 
 */
function darken(pixelIdArray) {
    pixelIdArray.forEach(darkenPixel);
}

/**
 * takes the pixelId as String and add an
 * additional class to the corresponding element
 * @param {String} pixelId 
 */
function illuminatePixel(pixelId) {
    console.log(pixelId);
    // call: illuminatePixel("0408")
    document.getElementById(pixelId).classList.add('luminousPixel');
}

/**
 * takes the pixelId as String and removes the
 * additional class from the corresponding element
 * @param {String} pixelId 
 */
function darkenPixel(pixelId) {
    // call: darkenPixel("0408")
    document.getElementById(pixelId).classList.remove('luminousPixel');
}