function UnitConverter() {
  // Variable containing the metric unit name depending on the imperial unit.
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

  // Taking the selected unit.
  const selectedUnit = document.getElementById("units").value;

  // Updating the name of the metric unit depending on the imperial unit selected.
  document.getElementById("metricUnit").innerText = convertedName[selectedUnit];

  ValueConverter();

  return;
}
