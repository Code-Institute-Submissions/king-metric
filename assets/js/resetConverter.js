function ResetConverter() {
  //Reset property selector
  document.getElementById("properties").innerHTML =
    '<option value="length">Length</option><option value="area">Area</option><option value="volume">Volume</option><option value="weigth">Weigth</option>';

  //Reset unit selector
  document.getElementById("units").innerHTML =
    '<option value="inch">Inch</option><option value="foot">Foot</option><option value="yard">Yard</option><option value="mile">Mile</option>';

  //Reset input value
  document.getElementById("inputValue").value = undefined;

  //Reset metric unit
  document.getElementById("metricUnit").innerText = "Centimetre(s):";

  //Reset calculation result message
  document.getElementById("unitConverted").innerHTML =
    "<p>Enter a value to be converted. 🙏🏼</p>";
  return;
}
