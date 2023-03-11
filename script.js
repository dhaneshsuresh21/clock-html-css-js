setInterval(setClock,1000);

const hoursAttribute = document.querySelector('[data-hour-hand]');
const minutesAttribute = document.querySelector('[data-minute-hand]');
const secondsAttribute = document.querySelector('[data-second-hand]');

function setClock(){
  
  const currentTime = new Date();
  const secondsRatio = currentTime.getSeconds() /60;
  const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;
  
  console.log(secondsRatio + " " + minutesRatio + " " + hoursRatio);
  
  setRotation(hoursAttribute,hoursRatio);
  setRotation(minutesAttribute,minutesRatio);
  setRotation(secondsAttribute,secondsRatio);
  
    
}

function setRotation(element,rotationRatio){
  element.style.setProperty('--rotation',rotationRatio * 360);
}