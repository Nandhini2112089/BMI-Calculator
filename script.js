function calc() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!isNaN(height) && !isNaN(weight)) {
        let res = weight / (height * height);
        
        if (res >= 18.5 && res < 25)
            document.getElementById("bmi").value = res.toFixed(2) + "  Healthy";
        else if (res >= 25 && res < 30)
            document.getElementById("bmi").value = res.toFixed(2) + "  Overweight";
        else if (res >= 30)
            document.getElementById("bmi").value = res.toFixed(2) + "  Obese";
        else 
            document.getElementById("bmi").value = res.toFixed(2) + "  Underweight";
    } else {
        alert("Enter correct details");
    }
}
A