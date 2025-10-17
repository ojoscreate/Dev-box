document.querySelector(".temp-form").addEventListener("submit", function (e) {
  document.querySelector("#loading").style.display = "block";
  document.querySelector("#results").style.display = "none";
  setTimeout(convertTemp, 1500);
  e.preventDefault();
});
function convertTemp(e) {
  // Selecting inputs
  const celsius = document.querySelector("#celsiusTemperature");
  const fahrenheit = document.querySelector("#fahrenheitTemperature");
  //   Selecting outputs
  const celsiusResult = document.querySelector("#celsius");
  const fahrenheitResult = document.querySelector("#fahrenheit");

  //   getting value
  const celsiusTemp = parseFloat(celsius.value);
  const fahrenheitTemp = parseFloat(fahrenheit.value);
  console.log(celsiusTemp, fahrenheitTemp);

  //   CONVERTING
  const convertCel = (celsiusTemp * 9) / 5 + 32;
  const convertFahren = ((fahrenheitTemp - 32) * 5) / 9;
  if (isNaN(fahrenheit.value) || isFinite(convertCel)) {
    document.querySelector("#results").style.display = "none";
    fahrenheitResult.value = convertCel.toFixed(1);
    // REMOVE LOADER AND ADD RESULTS
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "block";
    disabledCelResult.style.display = "none";
    disabledFahenResult.style.display = "inline-flex";
  } else if (isNaN(celsiusTemp) && isNaN(convertCel)) {
    // clearError();
    converterError("Type in Celsius Degree");
  }

  if (isFinite(convertFahren) || isNaN(celsius.value)) {
    document.querySelector("#results").style.display = "none";
    celsiusResult.value = convertFahren.toFixed(1);
    // REMOVE LOADER AND ADD RESULTS
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "block";
    disabledFahenResult.style.display = "none";
    disabledCelResult.style.display = "inline-flex";
  } else if (isNaN(fahrenheitTemp) && isNaN(convertFahren)) {
    // clearError();
    converterError("Type in Fahrenheit Degree");
  }
  // ERROR HANDLER
  if (isNaN(celsiusTemp) && isNaN(fahrenheitTemp)) {
    converterError("Choose Converter");
  }
  // else if (isNaN(fahrenheitTemp) && isFinite(convertCel)) {
  //   converterError("Type in Fahrenheit Degree");
  // }
  //  else  {
  //   converterError("Type in Celsius Degree");
  // }

  // e.preventDefault();
}

// ADDING THE ERROR PAGE
function converterError(error) {
  // HIDE LOADER
  document.querySelector("#loading").style.display = "none";
  // HIDE RESULT
  // document.querySelector("#results").style.display = "none";
  // GETTING NECESSARY ELEMENTS
  const formSelect = document.querySelector(".form-select");
  const formGroup = document.querySelector(".form-group");
  // const card = document.querySelector(".card");
  // CREATING THE ELEMENT
  const errorElement = document.createElement("div");
  errorElement.className = "alert alert-danger";
  errorElement.appendChild(document.createTextNode(error));
  formGroup.insertBefore(errorElement, formSelect);

  setTimeout(clearError, 5000);
}
function clearError() {
  document.querySelector(".alert").remove();
}

// SELECTING CONVERTER

const changeCov = document.getElementById("tempType");
const disabledFahren = document.querySelector(".fahrenheit");
const disabledcel = document.querySelector(".celsius");
const disabledCelResult = document.querySelector(".celsiusResults");
const disabledFahenResult = document.querySelector(".fahrenheitResults");

temptype();

// CHANGE UI
function temptype() {
  changeCov.addEventListener("change", (event) => {
    switch (changeCov.value) {
      case "celsius":
        // DISABLING AND REMOVING FAHRENHEIT INPUT
        disabledFahren.disabled = true;
        disabledFahren.style.display = "none";
        // REMOVING CELSIUS RESULT
        disabledCelResult.style.display = "none";
        // ABLING AND ADDING CELSIUS INPUT
        disabledcel.disabled = false;
        disabledcel.style.display = "inline-flex";
        // REMOVING RESULTS
        document.querySelector("#results").style.display = "none";
        // ADD FAHRENHEIT RESULTS
        // disabledFahenResult.style.display = "inline-flex";

        break;
      case "fahrenheit":
        // convertTemp();
        // DISABLING AND REMOVING CELSIUS INPUT
        disabledcel.disabled = true;
        disabledcel.style.display = "none";
        // REMOVE FAHRENHEIT RESULTS
        disabledFahenResult.style.display = "none";
        // ABLING AND ADDING FAHRENHEIT INPUT
        disabledFahren.disabled = false;
        disabledFahren.style.display = "inline-flex";
        // REMOVING RESULTS
        document.querySelector("#results").style.display = "none";
        // ADD CELSIUS RESULT
        // disabledCelResult.style.display = "inline-flex";
        break;

      default:
        document.querySelector("#results").style.display = "none";
        // DISABLING AND REMOVING FAHRENHEIT INPUT
        disabledFahren.disabled = true;
        disabledFahren.style.display = "none";
        // REMOVING CELSIUS RESULT
        disabledCelResult.style.display = "none";
        // DISABLING AND REMOVING CELSIUS INPUT
        disabledcel.disabled = true;
        disabledcel.style.display = "none";
        // REMOVE FAHRENHEIT RESULTS
        disabledFahenResult.style.display = "none";
        // temptype();
        break;
    }
  });
  // e.preventDefault();
}
// REMOVE UI
// function temptype(e) {
//   const tempValue = document.querySelector("#tempType").value;
//   if (tempValue == "celsius") {
//     // DISABLE AND REMOVE FAHRENHEIT INPUT
//     const disableFahren = document.querySelector(".fahrenheit");
//     disableFahren.disabled = true;
//     disableFahren.style.display = "none";

//     // REMOVE CELSIUS RESULT
//     const removeCel = document.querySelector(".celsiusResults");
//     removeCel.style.display = "none";
//   } else if (tempValue == "fahrenheit") {
//     // DISABLE AND REMOVE CELSIUS INPUT
//     const disableCel = document.querySelector(".celsius");
//     disableCel.disabled = true;
//     disableCel.style.display = "none";
//     // REMOVE FAHRENHEIT RESULTS
//     const removeFahren = document.querySelector(".fahrenheitResults");
//     removeFahren.style.display = " none";
//   }
//   // ADDING EVENT LISTENER TO THE CONVERTER FOAM

//   e.preventDefault();
// }
