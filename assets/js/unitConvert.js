function UnitConverter() {
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

  ValueConverter();

  return;
}
