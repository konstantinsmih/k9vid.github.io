function getRandomItem(vietas) {
  const randomIndex = Math.floor(Math.random() * vietas.length);
  const item = vietas[randomIndex];
  return item;
}

let str = "";
for (let i = 0; i < 10; i++) {
  str = str + i;
  rezultats = Math.round(Math.random());
  if (rezultats == 1) {
    izvele = "likt";
  } else {
    izvele = "nelikt";
    console.log(izvele);
    document.write("<p>" + "• " + izvele + "</p>");
  }

  const vietas = ["A", "B", "C", "D", "E", "F", "G"];
  if (izvele == "likt") {
    const vieta = getRandomItem(vietas);
    const teksts = "liec vietā " + vieta;
    console.log(teksts);
    document.write("<p>" + "• " + teksts + "</p>");
  }
}
    