var interval;
var countdownTime;
var deadline;

function main() {
    var work = document.getElementById("worktime");
    var workvalue = work.value;
    var mnts = Number(workvalue);
    if (mnts<1) {refresh(); alert ("You forgot to add minutes. Please, do it or panda will cry :( ");}

    var timeInMinutes = mnts;
    var currentTime = Date.parse(new Date());
    deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
    timer();
    document.getElementById("start").disabled = true;
}


function timer() {

    var currentTime = Date.parse(new Date());
    countdownTime = deadline - currentTime;
    interval = setInterval(function() {
        var hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML =  hours + " hours " + minutes + " minutes " + seconds + " seconds"

        if (countdownTime < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Take a break now!";

            new Audio('http://www.pacdv.com/sounds/domestic_sound_effects/alarm_clock_2.wav').play()
        }

        currentTime = Date.parse(new Date());
        countdownTime = deadline - currentTime;
    }, 1000);

}




function pause() {
    clearInterval(interval);

}

function resume() {
    let currentTime = Date.parse(new Date());
    deadline = currentTime + countdownTime;
    timer();

}

function refresh() {
    window.location.reload();
}
// You are here, checking my code, wanting to know how it works or why doesn't it work? I got you, fam! Here's how it was made https://i.imgur.com/uP1gl2Z.gifv