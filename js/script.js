//color picker button constants
const addColorBtn = document.getElementById("addColorBtn");
const subColorBtn = document.getElementById("subColorBtn");
const colorPickerOptions = document.getElementById("colorPickerOptions");

// submission constants
const submitSection = document.getElementById("submissionSection");
const submitTitle = document.getElementById("submissionTitle");
const submitText = document.getElementById("submissionText");
const colorPaletteBox = document.getElementById("submissionColorPalette");
const submitDescription = document.getElementById("submissionDescription");





//color button functionality
if(addColorBtn){
    addColorBtn.addEventListener("click", addColor);
    addColorBtn.addEventListener("keydown", (event) => {
        if(event.key == "Enter"){
            addColor();
        }
    });
}

if(subColorBtn){
    subColorBtn.addEventListener("click", subColor);

    subColorBtn.addEventListener("keydown", (event) => {
        if(event.key == "Enter"){
            subColor();
        }
    });
}


//adds color input to color picker options on suggest.html with a maximum of 6
function addColor(){

    const newColor = document.createElement('input');
    newColor.classList.add("colorPicker");
    newColor.type = "color";
    newColor.value = "#070309";

    if(colorPickerOptions.children.length < 6){
        colorPickerOptions.append(newColor);
    }
    
}
//removes color input to color picker options on suggest.html with a minimum of 3
function subColor(){

   if(colorPickerOptions.children.length > 2){
        colorPickerOptions.lastElementChild.remove();
   }
}


// submit suggestion form functionality

function submitForm(){

    const firstName = document.getElementById("userFirstName");
    const lastName = document.getElementById("userLastName");
    const artName = document.getElementById("nameInput");
    const artDescription = document.getElementById("artDescription");

    //if statement checking if name inputs have a value. if not, display alert.
    if(firstName.value && lastName.value && artName.value && artDescription.value){
        submitSection.style.display = "grid";
        //submit text
        submitText.textContent = `Thank you, ${firstName.value} ${lastName.value}, for your submission! We will look over your suggestion for your art installation entitled "${artName.value}" and get back to you shortly! Below we'll have an overview of your submission for your convieneance!`;

        //submission description

        submitDescription.textContent = artDescription.value;


        // color palette box
        colorPaletteBox.replaceChildren();
        const colorPaletteChoices = Array.from(colorPickerOptions.children);

        colorPaletteChoices.forEach((color) => {
            console.log(color.value);

            const colorChoice = document.createElement("div");
            const colorChoiceText = document.createElement("h3");
            colorChoice.style.backgroundColor = color.value;
            colorChoiceText.textContent = color.value;

            colorPaletteBox.append(colorChoice);
            colorChoice.append(colorChoiceText);
        });
    }
    else{
        alert("Please enter information into all required fields to submit.");
    }
}