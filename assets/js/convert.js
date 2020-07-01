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

  UnitConverter();

  return;
}

function UnitConverter() {
  const enteredValue = parseInt(document.getElementById("inputValue").value);
  const unit = document.getElementById("units").value;

  switch (unit) {
    // Unit switch for Length
    case "inch":
      document.getElementById("metricUnit").innerText = "Centimetre(s):";
      break;
    case "foot":
    case "yard":
      document.getElementById("metricUnit").innerText = "Metre(s):";
      break;
    case "mile":
      document.getElementById("metricUnit").innerText = "Kilometre(s):";
      break;

    //Unit switch for Area
    case "sqinch":
      document.getElementById("metricUnit").innerText = "Square Centimetre(s):";
      break;
    case "sqfoot":
    case "sqyard":
      document.getElementById("metricUnit").innerText = "Square Metre(s):";
      break;
    case "sqmile":
      document.getElementById("metricUnit").innerText = "Square Kilometre(s):";
      break;

    //Unit switch for Volume
    case "cuinch":
      document.getElementById("metricUnit").innerText = "Cubic Centimetre(s):";
      break;
    case "cufoot":
      document.getElementById("metricUnit").innerText = "Cubic Metre(s):";
      break;
    case "flounce":
      document.getElementById("metricUnit").innerText = "Millilitre(s):";
      break;
    case "gallon":
      document.getElementById("metricUnit").innerText = "Litre(s):";
      break;

    //Unit switch for Weigth
    case "ounce":
      document.getElementById("metricUnit").innerText = "Gram(s):";
      break;
    case "pound":
    case "stone":
      document.getElementById("metricUnit").innerText = "Kilogram(s):";
      break;
    case "ton":
      document.getElementById("metricUnit").innerText = "Tonne(s):";
      break;
  }

  return;
}
