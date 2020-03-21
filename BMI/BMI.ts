const form = document.querySelector("#form");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#result");

form.addEventListener('submit', function (e){
    e.preventDefault();

    let height: number = heightInput.value / 100; // m to cm
    let weight: number = weightInput.value;

    let BMI: number = (weight / Math.pow(height, 2)).toFixed(2);

    result.textContent = `당신의 BMI 지수는 ${BMI}입니다.`;
});