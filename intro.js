function calculateHeight() {
    const height = parseInt(document.getElementById("input").value); // Get the value from the input field and convert to integer
    const average = 69;
    const avgnba = 79;
    let convert;

    // if else statements for calculations(1st: Greater than, 2nd: Less than: 3rd: Equal to)

    if (height > average) { 
        let difference = height - average;
        convert = difference + avgnba;
        console.log(convert);
        document.getElementById("result").textContent = "Result: " + convert;

    } else if (height < average) {
        let difference = average - height;
        convert = avgnba - difference;
        console.log(convert);
        document.getElementById("result").textContent = "Result: " + convert;


    } else {
        console.log(avgnba);
        document.getElementById("result").textContent = "Result: " + avgnba;
    }
}

function dropDownMenu() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.value;

}
