var time = document.getElementById('time'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset'),
    red_score = document.getElementById('red_score'),
    red_plus = document.getElementById('red_plus'),
    red_minus = document.getElementById('red_minus'),
    red_team_name = document.getElementById('red_team_name'),
    blue_score = document.getElementById('blue_score'),
    blue_plus = document.getElementById('blue_plus'),
    blue_minus = document.getElementById('blue_minus'),
    blue_team_name = document.getElementById('blue_team_name'),
    seconds = 0, minutes = 30, red = 0, blue = 0,
    t;

function add() {
    seconds--;
    if (seconds < 0) {
        if (minutes <= 0) {
            seconds = 0;
            minutes = 0;
            clearTimeout(t);
        } else {
            seconds = 59;
            minutes--;
        }
    }
    
    time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
reset.onclick = function() {
    clearTimeout(t);
    time.textContent = "30:00";
    seconds = 0; minutes = 30;
}

function add_to_red() {
    red++;
    red_score.textContent = red;
}

function remove_from_red() {
    red--;
    red_score.textContent = red;
}

function add_to_blue() {
    blue++;
    blue_score.textContent = blue;
}

function remove_from_blue() {
    blue--;
    blue_score.textContent = blue;
}

/* score buttons */
red_plus.onclick = add_to_red;
red_score.onclick = add_to_red;

red_minus.onclick = remove_from_red;

blue_plus.onclick = add_to_blue;
blue_score.onclick = add_to_blue;

blue_minus.onclick = remove_from_blue;

/* Set values */
blue_team_name.onclick = function() {
    name = prompt("Rename the blue team", blue_team_name.textContent);
    if (name != "") {
        blue_team_name.textContent = name;
    }
}

red_team_name.onclick = function() {
    name = prompt("Rename the red team", red_team_name.textContent);
    if (name != "") {
        red_team_name.textContent = name;
    }
}

time.onclick = function() {
    clearTimeout(t);
    new_time = prompt("Set the new time e.g. 30:00", time.textContent);
    if (new_time != "" && new_time != null) {
        time.textContent = new_time;
        new_time = new_time.split(":");
        minutes = parseInt(new_time[0])
        seconds = parseInt(new_time[1])
    }
}