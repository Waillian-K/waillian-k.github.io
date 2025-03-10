// Update the clock every second
setInterval(updateClock, 1000);

function updateClock() {
    let now = new Date();

    // Get time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time values to always be two digits
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Update time display
    document.querySelector(".hour").textContent = hours;
    document.querySelector(".minute").textContent = minutes;
    document.querySelector(".second").textContent = seconds;
    document.querySelector(".period").textContent = period;

    // Get date components
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

    let dayName = dayNames[now.getDay()];
    let dayNum = now.getDate();
    let monthName = monthNames[now.getMonth()];
    let yearNum = now.getFullYear();

    // Update date display
    document.querySelector(".day-name") = dayName;
    document.querySelector(".day-num") = dayNum;
    document.querySelector(".month-name") = monthName;
    document.querySelector(".year-num") = yearNum;
}

// Initial call to display clock immediately
updateClock();
