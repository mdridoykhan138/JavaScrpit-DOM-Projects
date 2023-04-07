/**
 * Project Requirments:
 * - Change the Background color by generating random RGB (rgb(255, 255, 255)) color by "clicking" a Button. 
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
    const changeButton = document.getElementById('changeBtn');

    // click event add event
    changeButton.addEventListener('click', function(){
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    });
};

// =========================================================
// Step - 2: Random color generator funtion
// =========================================================
// rgb(0, 0, 0) || rgb(255, 255, 255) || '0' theke '255' porjonto color code 

// This is floating point number
// Ex:
// Math.random() || eita '0' theke '1' -er modde jei kono ekta number dibe output: 0.4387575 || 0.54515656

// This is floating point number
// Ex:
// Math.random() * 255 || eita '0' theke '255' -er modde jei kono ekta number dibe output: 115.4387575 || 245.54515656 || 2.45634534

// This is integer number
// Ex:
// Math.random() * 255 || Ei puro ongshotake amra floor korbo taile integer number pabo
// Math.floor(Math.random() * 255); || eita '0' theke '255' -er modde jei kono ekta number dibe output: 115 || 245 || 2

// function 
function generateRGBColor() {
    // rgb(0, 0, 0) || rgb(255, 255, 255)
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // RGB string || templete String 
    return `rgb(${red}, ${green}, ${blue})`;
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