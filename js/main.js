const date = new Date();

const monthDays = document.querySelector('.days')

const months = [
    "Januari",
    "Februari",
    "Maart",
    "Apri",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";  

for(let i = 1; <= 31; i++) {
    days +=  `<div>${i}</div>` ;
    monthDays.innerHTML = days;

}
    
