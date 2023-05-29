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
    izvele = "Šoreiz slēpnis nav nepieciešams.";
    document.getElementById("result").innerHTML = izvele;
  }
 
  const vietas = [
    "Virsbūves priekšā",
    "Virsbūves labajā sānā",
    "Virsbūves kreisajā sānā",
    "Virsbūves aizmugurē",
    "Zem transporta",
    "Salona priekšā ap krēslu šofera pusē",
    "Salona priekšā panelī šofera pusē",
    "Salona aizmugurē šofera pusē",
    "Salona priekšā ap krēslu pasažiera pusē",
    "Salona priekšā panelī pasažiera pusē",
    "Salona aizmugurē pasažiera pusē",
    "Bagāžas nodalījumā",
    "Bagāžas nodalījuma durvīs no iekšpuses"
  ];
  if (izvele == "likt") {
    vieta = getRandomItem(vietas);
    vieta;
    document.getElementById("result").innerHTML = vieta + ".";
  }
}
 

