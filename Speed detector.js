let speed = prompt("Input Speed: ");
let limit = 70;

function speedDetector() {
    let response;
    speed = Number(speed); 
    // Convert speed to a number

    if (speed <= limit) {
        response = "Ok";
    } else {
        let points = Math.floor((speed - limit) / 5);
        if (points < 12) {
            response = `Points: ${points}`;
        } else {
            response = "License suspended";
        }
    }
    return response;
}

console.log(speedDetector());