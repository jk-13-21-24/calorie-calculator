const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", calculate);

function calculate() {

    const sex = document.getElementById("sex").value;

    const age = Number(
        document.getElementById("age").value
    );

    const weight = Number(
        document.getElementById("weight").value
    );

    const height = Number(
        document.getElementById("height").value
    );

    const activity = Number(
        document.getElementById("activity").value
    );


    // -------------------------
    // BMR
    // -------------------------

    const bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        (sex === "male" ? 5 : -161);


    // -------------------------
    // TDEE
    // -------------------------

    const tdee = bmr * activity;


    // -------------------------
    // Your custom calculations
    // -------------------------

    const energy = weight * 33;

    const protein = weight * 1.3;

    const fat =
        (energy * 0.3) / 9;

    const fiber =
        energy * 0.014;

    const carbs =
        (
            energy -
            (protein * 4) -
            (fat * 9)
        ) / 4;

    const water =
        weight / 30;


    // -------------------------
    // BMI
    // -------------------------

    const bmi =
        weight / Math.pow(height / 100, 2);


    // -------------------------
    // Display results
    // -------------------------

    document.getElementById("bmr").textContent =
        Math.round(bmr) + " kcal";

    document.getElementById("tdee").textContent =
        Math.round(tdee) + " kcal";

    document.getElementById("energy").textContent =
        Math.round(energy) + " kcal";

    document.getElementById("protein").textContent =
        protein.toFixed(1) + " g";

    document.getElementById("fat").textContent =
        fat.toFixed(1) + " g";

    document.getElementById("carbs").textContent =
        carbs.toFixed(1) + " g";

    document.getElementById("fiber").textContent =
        fiber.toFixed(1) + " g";

    document.getElementById("water").textContent =
        water.toFixed(2) + " L";

    document.getElementById("bmi").textContent =
        bmi.toFixed(1);
}


// Calculate default values when page loads

calculate();