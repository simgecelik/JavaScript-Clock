let myName = document.querySelector("#myName")
let name = prompt("Adınızı giriniz")
myName.innerHTML = `${name}`;

function showTime() {
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("myClock").innerHTML = `${d.toLocaleTimeString()}  ${ day}`;
}
setInterval(showTime, 1000);