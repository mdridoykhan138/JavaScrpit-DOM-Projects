/**
 * Project Requirments:
 * - Change the Background color by generating random HEX (#ffffff) || (#000000)) color by "clicking" a Button.
 * - Also display the HEX code to a disabled input field
 */

/**===========================
 * - Custom JS area here
===========================*/

// Steps
// --- Step - 1: Create onload handler
// --- Step - 2: Random color generator funtion
// --- Step - 3: Collect all necessary reference
// --- Step - 4:  Handle the click event



// =========================================================
// Step - 1: Create onload handler
// =========================================================
window.onload = () => {
    main()
};



// create the main funtion
function main(){
    // Collect all necessary reference 
    const root = document.getElementById('root');
    const showOutput = document.getElementById('output');
    const changeButton = document.getElementById('changeBtn');

    // click event add event
    changeButton.addEventListener('click', function(){
        const bgColor = generateHexColor();
        // input field er value er modde bgColor er Hex Code ta bosbe || Also display the HEX code to a disabled input field
        showOutput.value = bgColor;
        // backgroundColor change || Change the Background color by generating random HEX (#ffffff) || (#000000)) color by "clicking" a changeButton variable
        root.style.backgroundColor = bgColor;
    });
};



// =========================================================
// Step - 2: Random HEX (16) color generator funtion
// =========================================================
// #000000 || #ffffff || HEX (255- ff, 255 - ff, 255 - ff) || #ffffff || '0' theke '255' porjonto color code || Hexadecimal number er base value holo (16) || octal (8) || binary (2) || 255 - toString(16) korle amra output pabo 'ff'...

// This is floating point number
// Ex:
// Math.random() || eita '0' theke '255' -er modde jei kono ekta Hexadecimal number dibe output: 0.4387575 || 0.54515656

// This is floating point number
// Ex:
// Math.random() * 255 || eita '0' theke '255' -er modde jei kono ekta number dibe output: 115.4387575 || 245.54515656 || 2.45634534

// This is integer number
// Ex:
// Math.random() * 255 || Ei puro ongshotake amra floor korbo taile integer number pabo
// Math.floor(Math.random() * 255); || eita '0' theke '255' -er modde jei kono ekta number dibe output: 115 || 245 || 2

// function 
function generateHexColor() {
    // #000000 || #ffffff
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // Hex string || templete String
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// =========================================================
// Step - 3: Collect all necessary reference
// =========================================================
// main function -e call kora hoyeche necessary variable gula


// =========================================================
// Step - 4:  Handle the click event
// =========================================================
// event handler main function e add kora hoyeche


/**---------------------------
-- Custom JS area ends here
---------------------------**/