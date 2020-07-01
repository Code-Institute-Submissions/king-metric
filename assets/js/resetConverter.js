function ResetConverter() {
  document.getElementById("properties").innerHTML =
    '<option value="length">Length</option><option value="area">Area</option><option value="volume">Volume</option><option value="weigth">Weigth</option>';

  document.getElementById("units").innerHTML =
    '<option value="inch">Inch</option><option value="foot">Foot</option><option value="yard">Yard</option><option value="mile">Mile</option>';

  document.getElementById("inputValue").value = undefined;

  document.getElementById("metricUnit").innerText = "Centimetre(s):";

  document.getElementById("unitConverted").innerHTML =
    "<p>Please, enter a value to be converted! 🙏🏼</p>";
  return;
}
