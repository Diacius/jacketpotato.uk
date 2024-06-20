const form = document.querySelector("#ticket-calculator-form")
function calculate() {
    let formData = new FormData(form);
    currentDate = new Date();
    endDate = new Date('2024-08-31T00:00:00Z');
    // time left in milliseconds
    msLeft = endDate-currentDate;
    // calculate the number of hours left
    // convert to seconds then to hours
    secondsLeft = msLeft / 1000
    hoursLeft = secondsLeft / 60 / 60;
    ticketsNeeded = formData.get('ticketsNeeded');
    percentageOfHoliday = formData.get("pecentageCannotWork")
    if (formData.get("pecentageCannotWork") !== 0 && formData.get("percentageCannotWork") !== null) {
        hoursLeft = hoursLeft * percentageOfHoliday;
    }
    else {
        daysMissed = formData.get("daysCannotWork");
        hoursLeft = hoursLeft - (daysMissed * 24)
    }
    daysLeft = hoursLeft / 24
    currentTickets = formData.get("tickets");
    ticketsNeeded = ticketsNeeded - currentTickets
    console.log("Hours left " + hoursLeft)
    console.log("Tickets needed" + ticketsNeeded)
    console.log("Daysleft " + daysLeft)
    output = document.querySelector('#output')
    output.innerHTML = (ticketsNeeded / daysLeft)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    calculate();
  });