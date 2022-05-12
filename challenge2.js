//Gebruikt data van client om gegevens op te vragen
var today = new Date();

// Script voor day
const weekday =['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;

// Script voor month
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('month').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];

// Script voor clock
function tickingTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = updateTime(m);
    s = updateTime(s);
    
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(tickingTime, 600);
  }

  function updateTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

// Script voor year
document.getElementById('year').innerHTML = today.getFullYear();
