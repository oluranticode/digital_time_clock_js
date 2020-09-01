function showTime(){
    var date = new Date();

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes();// 0 - 59
    var s = date.getSeconds(); // 0 - 59

    // Add AM and PM
    var amPM = (h < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hours format
    if(h == 0){
        h = 12;
    }
    h = (h > 12 ) ? h - 12 : h;
    h = (h < 10 ) ? "0" + h : h;
    m = (m < 10 ) ? "0" + m : m;
    s = (s < 10 ) ? "0" + s : s;

    // if(h > 12){
    //     h = h - 12;
    // }
    // if(m < 10){
    //     m = "0" + m;
    // }
    // if(s < 10){
    //     s = "0" + s;
    // }

// End of 12-hours Format

        // Display time
    var time = h + " : " + m + " : " + s + " " + amPM;
     document.getElementById('clock').innerHTML = time;
     setTimeout(showTime, 1000)

}

// showTime();
// setInterval(showTime, 1000);