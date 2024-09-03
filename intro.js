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

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

