function PropertyConverter() {
  const convertedOptions = {
    length:
      '<option value="inch">Inch</option><option value="foot">Foot</option><option value="yard">Yard</option><option value="mile">Mile</option>',
    area:
      '<option value="sqinch">Square Inch</option><option value="sqfoot">Square Foot</option><option value="sqyard">Square Yard</option><option value="sqmile">Square Mile</option>',
    volume:
      '<option value="cuinch">Cubic Inch</option><option value="cufoot">Cubic Foot</option><option value="flounce">Fluid Ounce</option><option value="gallon">Gallon</option>',
    weigth:
      '<option value="ounce">Ounce</option><option value="pound">Pound</option><option value="stone">Stone</option><option value="ton">Ton</option>',
  };

  const selectedProperty = document.getElementById("properties").value;

  document.getElementById("units").innerHTML =
    convertedOptions[selectedProperty];

  UnitConverter();

  ValueConverter();

  return;
}
