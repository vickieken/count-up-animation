const displayValues = document.querySelectorAll(".num");

let intervals = 5000;

displayValues.forEach((displayValue) => {
    let startValue = 0;

    let endValue = parseInt(displayValue.getAttribute("data-val"));

    let duration = Math.floor(intervals / endValue)

    let counter = setInterval(() => {
        startValue ++;
        displayValue.innerHTML = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})