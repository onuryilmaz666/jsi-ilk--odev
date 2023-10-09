let userName = prompt('İsminizi giriniz:');

let greetingElement = document.getElementById('myName');
greetingElement.textContent = userName;


function showTime() {

    let now = new Date()
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' })
    let time = now.toLocaleTimeString('tr-TR') 
    let myClock = document.querySelector("#myClock") 
    myClock.innerHTML = time + ' ' + day 
    
}

setInterval(showTime, 1000)