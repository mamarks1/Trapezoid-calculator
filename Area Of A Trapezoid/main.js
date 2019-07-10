//Area of a trapezoid
//Event Listener
document.getElementById('Btn').addEventListener('click', calculateEvent)
//Event Function
function calculateEvent() {
    //take input information
    let B = document.getElementById('b1').value
    let b = document.getElementById('b2').value
    let h = document.getElementById('H').value
    //calculate area when button clicked\
    let a = 1/2*(B+b)*h
    //Output area of trapezoid
    document.getElementById('Area').innerHTML = a;
}