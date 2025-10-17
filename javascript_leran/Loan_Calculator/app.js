// Selecting variables

const inputCal = document.querySelectorAll(".form-control");

// Adding events

// THIS COULD BE DONE BY JUST ADDING FOCUS IN CSS
inputCal.forEach((inputElement) => {
  inputElement.addEventListener("mousedown", inputClicked);
});

// Input click function
function inputClicked(event) {
  inputCal.forEach((input) => {
    input.style.outline = "";
  });
  event.target.style.outline = "lightgrey solid 1.7px";
  console.log("clicked");
}

// LISTENING FOR THE SUBMIT BUTTON

document.querySelector(".loan-form").addEventListener("submit", function (e) {
  // SHOW LOADER
  document.querySelector("#loading").style.display = "block";
  // document.querySelector("#results").style.display = "none";
  //  SET TIMER
  setTimeout(Calculate, 1500);

  e.preventDefault();
});

function Calculate(e) {
  console.log("caculating...");

  // UI var
  const amount = document.querySelector("#amount");
  const Interest = document.querySelector("#interest");
  const yrs = document.querySelector("#years");
  const monthlyPayments = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principle = parseFloat(amount.value);
  const calculateInterest = parseFloat(Interest.value) / 100 / 12;
  const calYears = parseFloat(yrs.value) * 12;

  // COMPUTE MONTHLY PAYMENTS
  const W = Math.pow(1 + calculateInterest, calYears);
  const monthly = (principle * W * calculateInterest) / (W - 1);

  if (isFinite(monthly)) {
    monthlyPayments.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calYears).toFixed(2);
    totalInterest.value = (monthly * calYears - principle).toFixed(2);
    // HIDE LOADER
    document.querySelector("#loading").style.display = "none";
    // SHOWING RESULTS
    document.querySelector("#results").style.display = "block";
  } else {
    ShowError("Please Check your numbers");
  }

  // e.preventDefault();
}

function ShowError(error) {
  // HIDING BOTH RESULTS AND LOADER
  // document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "none";
  // GETTING NECESSARY ELEMENTS
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // CREATING THE ERROR DIV
  const errorDiv = document.createElement("div");
  // ADDING CLASS TO THE NEW DIV
  errorDiv.className = "alert alert-danger";
  // CREATING TEXT NODE AND APPENDING TO DIV
  errorDiv.appendChild(document.createTextNode(error));
  // INSERTING ABOVE HEADING
  card.insertBefore(errorDiv, heading);
  // CLEAR TIME OUT
  setTimeout(clearError, 4000);
}

// CLEAR ERROR
function clearError() {
  document.querySelector(".alert").remove();
}
