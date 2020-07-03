// This was the original code used for the function ValueConverter(). It worked fine. However, it was not optimal.
// After refactoting, the outcome is what you can see in the file valueConvert.js.

function ValueConverter() {
  const enteredValue = parseInt(document.getElementById("inputValue").value);
  const unit = document.getElementById("units").value;

  if (!enteredValue) {
    document.getElementById("unitConverted").innerHTML =
      "<p>Please, enter a value to be converted! 🙏🏼</p>";
  } else {
    switch (unit) {
      // Conversion for Length
      case "inch":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 2.54
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "foot":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 0.3048
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "yard":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 0.9144
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "mile":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 1.6093
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;

      //Conversion for Area
      case "sqinch":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 6.4516
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "sqfoot":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 0.0929
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "sqyard":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 0.8361
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "sqmile":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 2.59
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;

      //Conversion for Volume
      case "cuinch":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 16.387
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "cufoot":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 0.02832
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "flounce":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 29.574
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "gallon":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 3.7854
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;

      //Conversion for Weigth
      case "ounce":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 28.35
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "pound":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 0.4536
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "stone":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 6.3503
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
      case "ton":
        document.getElementById("unitConverted").innerHTML = `<p>${(
          enteredValue * 1.016
        ).toFixed(2)}&nbsp; 🎉</p>`;
        break;
    }
  }
  return;
}
