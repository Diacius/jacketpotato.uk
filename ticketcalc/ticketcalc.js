// Get the form element
const form = document.querySelector("#ticket-calculator-form")
function calculate() {
    // Collect the form data and get the points in time required
    let formData = new FormData(form);
    currentDate = new Date();
    endDate = new Date('2024-08-31T00:00:00Z');
    // time left in milliseconds
    msLeft = endDate-currentDate;
    // Convert to seconds then to hours
    secondsLeft = msLeft / 1000
    hoursLeft = secondsLeft / 60 / 60;
    ticketsNeeded = formData.get('ticketsNeeded');
    percentageOfHoliday = formData.get("pecentageCanWork");
    // Check if the user has expressed how many days they cannot work
    if (!(percentageOfHoliday == 0 || percentageOfHoliday == null || percentageOfHoliday == "")) {
       // Multiply hours left by multiplier
       hoursLeft = hoursLeft * percentageOfHoliday        
    }
    else {
        daysMissed = formData.get("daysCannotWork");
        hoursLeft = hoursLeft - (daysMissed * 24);
    }
    // 24 hours in a day
    daysLeft = hoursLeft / 24;
    // Find the number of tickets needed by subtracting the current number of tickets
    currentTickets = formData.get("tickets");
    ticketsNeeded = ticketsNeeded - currentTickets;
    console.log("Hours left " + hoursLeft);
    console.log("Tickets needed" + ticketsNeeded);
    console.log("Daysleft " + daysLeft);
    // Outpout the calculation to the page
    output = document.querySelector('#output');
    output.innerHTML = (ticketsNeeded / daysLeft).toFixed(4);
}

form.addEventListener("submit", (event) => {
    // prevent a normal form submit and calculate the tickets needed
    event.preventDefault();
    let formData = new FormData(form);
    calculate();
  });