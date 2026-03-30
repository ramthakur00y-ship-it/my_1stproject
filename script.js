function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result;

    // Convert logic
    if (from === "C" && to === "F") {
        result = (temp * 9/5) + 32;
    } 
    else if (from === "F" && to === "C") {
        result = (temp - 32) * 5/9;
    } 
    else {
        result = temp; // same unit
    }

    document.getElementById("result").innerText = "Result: " + result;
}