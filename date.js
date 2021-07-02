setInterval(function () {
    var date = new Date();
    var hours = adjustTime(hours);
    var minutes = adjustTime(minutes);
    var seconds = adjustTime(seconds);

    function adjustTime(time) {
        if (time == hours) {
            if (date.getHours() < 10) { return "0" + date.getHours(); }
            else return date.getHours();
        } else if (time == minutes) {
            if (date.getMinutes() < 10) { return "0" + date.getMinutes(); }
            else return date.getMinutes();
        } else if (time == seconds) {
            if (date.getSeconds() < 10) { return "0" + date.getSeconds(); }
            else return date.getSeconds();
        }
    }

    var showTime = document.getElementById("date");
    showTime.innerText = hours + ":" + minutes + ":" + seconds;

}, 1);

