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

// Script voor timezone

function updateTimeFrame(){
	var now = new Date();
	var h = now.getHours();
    var background = document.getElementsByClassName('body');
		
	if (h >= 6 && h < 8){ //Sunrise
        document.getElementBy('body').style.backgroundColor = ('#ffa47f') //sunrise
        document.getElementById('zon').style.background = 'radial-gradient(circle at top left, #ffd753, #e21b1b)'; //sunrise
        document.getElementById('keyframe').style.boxShadow = '0px 0px 5px #ffd753'; //sunrise
        
	
    } else if (h >= 8 && h < 17){ 	//Day
        document.getElementById('body').style.background = 'linear-gradient(#60dbf9, #ffa47f)'; //day
        document.getElementById('zon').style.background = 'radial-gradient(circle at top left, #e21b1b. #ffd753)'; // day
        document.getElementById('keyframe').style.boxShadow = '0px 0px 5px white'; //day
        
    
    } else if (h >= 15 && h <18) { //sundown
        document.getElementById('body').style.backgroundColor = ('#e76243') //sundown
        document.getElementById('zon').style.background = 'radial-gradient(circle at top left, #ffd753, #e21b1b)'; //sundown
        document.getElementById('keyframe').style.boxShadow = '0px 0px 5px #ffd753'; //sundown


	} else if (h >= 18 && h < 24) { //Evening
        // background.classList.add('sunset');
        document.getElementById('body').style.background = 'linear-gradient(#0f0f57, #60dbf9)'; //night
        document.getElementById('zon').style.background = 'radial-gradient(circle at top left, white, grey)'; //night
        document.getElementById('keyframe').style.boxShadow = '0px 0px 5px white'; //night
		
	} else {
        document.getElementById('body').style.backgroundColor = ('#feffec') //else (greytone)
        document.getElementById('zon').style.background = 'radial-gradient(circle at top left, #c8b6a2, #84766d)'; //else (greytone)
		document.getElementById('keyframe').style.boxShadow = '0px 0px 5px white'; //else (greytone)
	} 

}
	updateTimeFrame();
