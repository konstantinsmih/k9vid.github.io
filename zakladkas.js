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
    izvele = "Šoreiz neliec";
    console.log(izvele);
    document.getElementById("result").innerHTML = izvele;
  }

  const vietas = [
    "virsbūves priekšā",
    "virsbūves labajā sānā",
    "virsbūves kreisajā sānā",
    "virsbūves azimugurē",
    "zem transporta",
    "salonā priekšā šofera pusē",
    "salonā aizmugurē pasažiera pusē",
    "salonā aizmugurē šofera pusē",
    "bagāžas nodalījumā"

  ];
  if (izvele == "likt") {
    vieta = getRandomItem(vietas);
    teksts = "Liec " + vieta;
    console.log(teksts);
    document.getElementById("result").innerHTML = teksts;
  }
}
