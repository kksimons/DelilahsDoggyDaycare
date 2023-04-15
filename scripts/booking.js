/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected,
// and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let selectedDays = [];
let dailyRate = 35;
let halfDaySelected = false;
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element,
//and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once.
//hint: .classList.contains() might be helpful here!

let dayButtons = document.querySelectorAll(".day-selector li");
dayButtons.forEach(function (dayButton) {
  let day = dayButton.getAttribute("id");
  dayButton.addEventListener("click", function () {
    toggleDaySelection(day);
  });
});

function toggleDaySelection(day) {
  let dayElement = document.getElementById(day);
  if (dayElement.classList.contains("clicked")) {
    // Remove the day from the selectedDays array
    let index = selectedDays.indexOf(day);
    if (index > -1) {
      selectedDays.splice(index, 1);
    }
    // Remove the clicked class from the day element
    dayElement.classList.remove("clicked");
  } else {
    // Add the day to the selectedDays array
    selectedDays.push(day);
    // Add the clicked class to the day element
    dayElement.classList.add("clicked");
  }
  // Recalculate the total cost
  recalculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days,
// any other relevant variables are reset, and the calculated cost is set to 0.

clearButton = document.getElementById("clear-button");

// Add event listener to clear button
clearButton.addEventListener("click", function () {
  // Remove "clicked" class from all days
  days = document.querySelectorAll(".day-selector li");
  days.forEach(function (day) {
    day.classList.remove("clicked");
  });

  // Reset relevant variables
  fullButton = document.getElementById("full");
  halfButton = document.getElementById("half");
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  dailyRate = 35;

  // Set calculated cost to 0
  costLabel = document.getElementById("calculated-cost");
  costLabel.innerHTML = "0";
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20,
// add the "clicked" class to the "half" element, remove it from the "full" element,
// and recalculate the total cost.

halfButton.addEventListener("click", function () {
  dailyRate = 20;
  // add the "clicked" class to the "half" element
  halfButton.classList.add("clicked");
  // remove the "clicked" class from the "full" element
  fullButton.classList.remove("clicked");
  recalculate();
});

// when the full-day button is clicked, the daily rate is set back to $35,
//the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function () {
  dailyRate = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  recalculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element
// to the appropriate value

function recalculate() {
  let costLabel = document.getElementById("calculated-cost");
  let totalCost = dailyRate * selectedDays.length;
  costLabel.innerHTML = totalCost;
}
