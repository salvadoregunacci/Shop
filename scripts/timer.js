const deadline = new Date();
SetDeadline(0);

let days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds');

const intervalTimer = setInterval(()=>{
 let time = getTimeRemaining(deadline);
 if(time.days <= 0 && time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0){
    SetDeadline(2);
 }
 days.textContent = addZeroToNumber(time.days);
 hours.textContent = addZeroToNumber(time.hours);
 minutes.textContent = addZeroToNumber(time.minutes);
 seconds.textContent = addZeroToNumber(time.seconds);
},100)

function addZeroToNumber(number){
    if(number < 10) return "0"+ number;
    else return number;
}
function getTimeRemaining(endtime) {
const t = Date.parse(endtime) - Date.parse(new Date());
const seconds = Math.floor( (t/1000) % 60 );
const minutes = Math.floor( (t/1000/60) % 60 );
const hours = Math.floor( (t/(1000*60*60)) % 24 );
const days = Math.floor( t/(1000*60*60*24) );
return {
total: t,
days: days,
hours: hours,
minutes: minutes,
seconds: seconds
};
}

function SetDeadline(date=1){
    deadline.setDate(deadline.getDate() + date);
}