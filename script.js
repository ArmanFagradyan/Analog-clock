const hourElem = document.getElementsByClassName('hour')[0];
const minuteElem = document.getElementsByClassName('minute')[0];
const secondElem = document.getElementsByClassName('second')[0];

function updateTime(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = ((hour + minute / 60 + second / 3600) / 12) * 360;
    const minuteDeg = ((minute + second / 60) / 60) * 360;
    const secondDeg = (second/60)*360;

    hourElem.style.transform = `rotate(${hourDeg}deg)`;
    minuteElem.style.transform = `rotate(${minuteDeg}deg)`;
    secondElem.style.transform = `rotate(${secondDeg}deg)`;

    hourElem.style.transition = 'transform 0.2s ease';
    minuteElem.style.transition = 'transform 0.2s ease';
    secondElem.style.transition = 'transform 0.2s ease';
}

setInterval(updateTime, 1000);
