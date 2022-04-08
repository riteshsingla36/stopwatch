var hr = 0
var min = 0
var sec = 0
var ms = 0
var running = false

function start() {
    running = true
    startWatch()
}

function stop() {
    running = false
}

function reset() {
    running = false
    hr = 0
    min = 0
    sec = 0
    ms = 0
    document.getElementById("hr").innerHTML = "0" + hr
    document.getElementById("min").innerHTML = "0" + min
    document.getElementById("sec").innerHTML = "0" + sec
    document.getElementById("ms").innerHTML = "0" + ms
}

function startWatch() {
    if (running) {
        ms = ms + 1
        if (ms == 100) {
            ms = 0
            sec = sec + 1
        }
        if (sec == 60) {
            min = min + 1
            sec = 0
        }
        if (min == 60) {
            hr = hr + 1
            min = 0
            sec = 0
        }

        var hrstr = hr
        var minstr = min
        var secstr = sec
        var msstr = ms

        if (hr < 10) {
            hrstr = "0" + hr
        }
        if (min < 10) {
            minstr = "0" + min
        }
        if (sec < 10) {
            secstr = "0" + sec
        }
        if (ms < 10) {
            msstr = "0" + ms
        }

        document.getElementById("hr").innerHTML = hrstr
        document.getElementById("min").innerHTML = minstr
        document.getElementById("sec").innerHTML = secstr
        document.getElementById("ms").innerHTML = msstr
        setTimeout(() => {
            startWatch()
        }, 10)


    }
}

