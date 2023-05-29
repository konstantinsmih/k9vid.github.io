function getRandomItem(vietas) {
  const randomIndex = Math.floor(Math.random() * vietas.length);
  const item = vietas[randomIndex];
  return item;
}

  rezultats = Math.round(Math.random());
  if (rezultats == 1) {
    izvele = "likt";
  } else {
    izvele = "Šoreiz neliec.";
    document.getElementById("result").innerHTML = izvele;

  const vietas = [
    "virsbūves priekšā",
    "virsbūves labajā sānā",
    "virsbūves kreisajā sānā",
    "virsbūves aizmugurē",
    "zem transporta",
    "salona priekšā šofera pusē",
    "salona aizmugurē šofera pusē",
    "salona priekšā pasažiera pusē",
    "salona aizmugurē pasažiera pusē",
    "bagāžas nodalījumā"
  ];
  if (izvele == "likt") {
    vieta = getRandomItem(vietas);
    teksts = "Liec " + vieta;
    document.getElementById("result").innerHTML = teksts + ".";
  }
}
