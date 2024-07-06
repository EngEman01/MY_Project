function updateTime() {
    const now = new Date(); 

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = 30 * hours + minutes / 2;
    const minuteAngle = 6 * minutes;
    const secondAngle = 6 * seconds;

    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    hourHand.style.transform = `rotate(${hourAngle}deg)`
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`
    secondHand.style.transform = `rotate(${secondAngle}deg)`
}

setInterval(updateTime, 1000);