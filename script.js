const counterValue = document.getElementById("counter");
const resetButton = document.getElementById("reset");

counterValue.addEventListener("click", function () {
    let value = Number(counterValue.textContent);
    value++;
    counterValue.textContent = value;
});

resetButton.addEventListener("click", function () {
    counterValue.textContent = 0;
})

/*
function incrementByOne(number) {
    number++;
    return number;
}

counterValue.addEventListener("click", incrementByOne);
*/