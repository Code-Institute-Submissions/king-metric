function UnitConverter() {
  const convertedName = {
    inch: "Centimetre(s):",
    foot: "Metre(s):",
    yard: "Metre(s):",
    mile: "Kilometre(s):",
    sqinch: "Square Centimetre(s):",
    sqfoot: "Square Metre(s):",
    sqyard: "Square Metre(s):",
    sqmile: "Square Kilometre(s):",
    cuinch: "Cubic Centimetre(s):",
    cufoot: "Cubic Metre(s):",
    flounce: "Millilitre(s):",
    gallon: "Litre(s):",
    ounce: "Gram(s):",
    pound: "Kilogram(s):",
    stone: "Kilogram(s):",
    ton: "Tonne(s):",
  };

  const selectedUnit = document.getElementById("units").value;

  document.getElementById("metricUnit").innerText = convertedName[selectedUnit];

  ValueConverter();

  return;
}
