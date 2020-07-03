function ValueConverter() {
  const convertConstant = {
    inch: 2.54,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1.6093,
    sqinch: 6.4516,
    sqfoot: 0.0929,
    sqyard: 0.8361,
    sqmile: 2.59,
    cuinch: 16.387,
    cufoot: 0.02832,
    flounce: 29.574,
    gallon: 3.7854,
    ounce: 28.35,
    pound: 0.4536,
    stone: 6.3503,
    ton: 1.016,
  };

  const enteredValue = parseInt(document.getElementById("inputValue").value);

  const selectedUnit = document.getElementById("units").value;

  if (!enteredValue) {
    document.getElementById("unitConverted").innerHTML =
      "<p>Enter a value to be converted. 🙏🏼</p>";
  } else {
    document.getElementById("unitConverted").innerHTML = `<p><strong>${(
      enteredValue * convertConstant[selectedUnit]
    ).toFixed(2)}</strong>&nbsp; 🎉</p>`;
  }
  return;
}
