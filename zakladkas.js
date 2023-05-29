function getRandomItem(vietas) {
  const randomIndex = Math.floor(Math.random() * vietas.length);
  const item = vietas[randomIndex];
  return item;
}

let str = "";
for (let i = 0; i < 1; i++) {
  str = str + i;
  rezultats = Math.round(Math.random());
  if (rezultats == 1) {
    izvele = "likt";
  } else {
    izvele = "Šoreiz neliec.";
    document.getElementById("result").innerHTML = izvele;
  }
 
  const vietas = [
    "virsbūves priekšā",
    "virsbūves labajā sānā",
    "virsbūves kreisajā sānā",
    "virsbūves aizmugurē",
    "zem transporta",
    "salona priekšā ap krēslu šofera pusē",
    "salona priekšā panelī šofera pusē",
    "salona aizmugurē šofera pusē",
    "salona priekšā ap krēslu pasažiera pusē",
    "salona priekšā panelī pasažiera pusē",
    "salona aizmugurē pasažiera pusē",
    "bagāžas nodalījumā"
  ];
  if (izvele == "likt") {
    vieta = getRandomItem(vietas);
    teksts = "Liec " + vieta;
    document.getElementById("result").innerHTML = teksts + ".";
  }
}
 

