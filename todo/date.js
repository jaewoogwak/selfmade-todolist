setInterval(function () {
    var date = new Date();
    var hours = adjustTime(hours);
    var minutes = adjustTime(minutes);
    var seconds = adjustTime(seconds);

    var YY = date.getFullYear();
    var MM = date.getMonth() + 1;
    var DD = date.getDate();

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

    var showTime = document.getElementById("time");
    showTime.innerText = hours + ":" + minutes + ":" + seconds;

    var showDate = document.getElementById("date");
    showDate.innerText = YY + "-" + MM + "-" + DD;
}, 1);



