let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeShow = $(".display");
let count = 0;
let int = null;
let isRunning = false;
$(".start").on("click", function () {
    if (int !== null) {
        clearInterval(int);
    }
    isRunning = true;
    int = setInterval(showTimer, 10);
});
$(".pause").on("click", function () {
    clearInterval(int);
    isRunning = false;
})
$(".reset").on("click", function () {
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
    clearInterval(int);
    $(".display").html("00:00:00:000");
    $(".laps").empty();
    $(".laps-container").hide();
    isRunning = false;
    count = 0;
})

function showTimer() {
    milliseconds += 10;
    if (milliseconds > 999) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timeShow.html(`${h}:${m}:${s}:${ms}`)
}
$(".lap").on("click", function () {
    if(isRunning)
    {count++;
    $(".laps-container").show();
    $(".laps").append("<li>#" + count + " " + timeShow.html() + "</li>")
    }
})