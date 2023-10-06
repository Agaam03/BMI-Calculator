let button = document.getElementById('submit-item');

button.addEventListener('click', (event) => {
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const result = document.getElementById('output');
    let status = false;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.innerHTML = 'Please provide valid numbers for weight and height.';
    } else {
        result.innerHTML = '';
        status = true;
    }

    if(status){
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML = `Your BMI is <b>${bmi}</b> which mean You are <b>Underweight</b>`;
        } else if (bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = `Your BMI is <b>${bmi}</b> which mean You are <b>Normal</b>`;
        } else if (bmi >= 25 && bmi <= 29.9){
            result.innerHTML = `Your BMI is <b>${bmi}</b> which mean You are <b>Overweight</b>`;
        } else {
            result.innerHTML = `Your BMI is <b>${bmi}</b> which mean You are <b>Obesity</b>`;
        }
    } else{
        result.innerHTML = 'Please provide valid numbers for weight and height.';
    }


    event.preventDefault();
});