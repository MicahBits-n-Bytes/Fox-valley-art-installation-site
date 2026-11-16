const addColorBtn = document.getElementById("addColorBtn");
const subColorBtn = document.getElementById("subColorBtn");
const colorPickerOptions = document.getElementById("colorPickerOptions");




if(addColorBtn){
    addColorBtn.addEventListener("click", addColor);
}

if(subColorBtn){
    subColorBtn.addEventListener("click", subColor);
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

   if(colorPickerOptions.children.length > 3){
        colorPickerOptions.lastElementChild.remove();
   }
}
