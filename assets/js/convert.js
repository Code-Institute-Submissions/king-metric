function PropertyConverter() {
  const property = document.getElementById("properties").value;

  switch (property) {
    case "length":
      document.getElementById("units").innerHTML =
        '<option value="inch">Inch</option><option value="foot">Foot</option><option value="yard">Yard</option><option value="mile">Mile</option>';
      break;
    case "area":
      document.getElementById("units").innerHTML =
        '<option value="sqinch">Square Inch</option><option value="sqfoot">Square Foot</option><option value="sqyard">Square Yard</option><option value="sqmile">Square Mile</option>';
      break;
    case "volume":
      document.getElementById("units").innerHTML =
        '<option value="cuinch">Cubic Inch</option><option value="cufoot">Cubic Foot</option><option value="flounce">Fluid Ounce</option><option value="gallon">Gallon</option>';
      break;
    case "weigth":
      document.getElementById("units").innerHTML =
        '<option value="ounce">Ounce</option><option value="pound">Pound</option><option value="stone">Stone</option><option value="ton">Ton</option>';
      break;
  }

  return;
}

function UnitConverter() {
  const enteredValue = parseInt(document.getElementById("inputValue").value);
  const unit = document.getElementById("units").value;

  switch (unit) {
    case "inch":
      document.getElementById("metricUnit").innerText = "Centimetre(s):";
      break;
  }

  return;
}
