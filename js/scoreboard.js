var time = document.getElementById('time'),
    start = document.getElementById('start_stop'),
    set = document.getElementById('set'),
    home_score = document.getElementById('home_score'),
    home_plus = document.getElementById('home_plus'),
    home_minus = document.getElementById('home_minus'),
    home_team_name = document.getElementById('home_team_name'),
    visitor_score = document.getElementById('visitor_score'),
    visitor_plus = document.getElementById('visitor_plus'),
    visitor_minus = document.getElementById('visitor_minus'),
    visitor_team_name = document.getElementById('visitor_team_name'),
    seconds = 0, minutes = 30, home = 0, visitor = 0,
    t, running = false;

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

function toggle_timer() {
    if (running) {
        clearTimeout(t);
        running = false;
    } else {
        timer();
        running = true;
    }
}

/* Clicking the timer */
time.onclick = toggle_timer

/* Start/Stop button */
start_stop.onclick = toggle_timer;

/* Set button */
set.onclick = function() {
    clearTimeout(t);
    new_time = prompt("Set the new time e.g. 30:00", "30:00");
    if (new_time != "" && new_time != null) {
        time.textContent = new_time;
        new_time = new_time.split(":");
        minutes = parseInt(new_time[0])
        seconds = parseInt(new_time[1])
    }
}

function add_to_home() {
    home++;
    home_score.textContent = home;
}

function remove_from_home() {
    home--;
    home_score.textContent = home;
}

function add_to_visitor() {
    visitor++;
    visitor_score.textContent = visitor;
}

function remove_from_visitor() {
    visitor--;
    visitor_score.textContent = visitor;
}

/* score buttons */
home_plus.onclick = add_to_home;
home_score.onclick = add_to_home;

home_minus.onclick = remove_from_home;

visitor_plus.onclick = add_to_visitor;
visitor_score.onclick = add_to_visitor;

visitor_minus.onclick = remove_from_visitor;

/* Set team names */
visitor_team_name.onclick = function() {
    var old_name = visitor_team_name.textContent;
    name = prompt("Rename the " + old_name + " team", old_name);
    if (name != "" && name != "null") {
        visitor_team_name.textContent = name.toUpperCase();
    }
}

home_team_name.onclick = function() {
    var old_name = home_team_name.textContent;
    name = prompt("Rename the " + old_name + " team", old_name);
    if (name != "" && name != "null") {
        home_team_name.textContent = name.toUpperCase();
    }
}
