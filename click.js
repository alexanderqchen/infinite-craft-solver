const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const tried = new Set();
let iterationCount = 1;

const loopThroughAll = async () => {
  console.log(`Running iteration ${iterationCount}`);
  iterationCount++;

  const items = JSON.parse(localStorage.getItem("infinite-craft-data"))
    ?.elements || [
    { text: "Water" },
    { text: "Fire" },
    { text: "Wind" },
    { text: "Earth" },
  ];

  console.log("items snapshot", items);

  for (let i = 0; i < items.length; i++) {
    for (let j = i; j < items.length; j++) {
      const itemText1 = items[i].text;
      const itemText2 = items[j].text;

      const hash = `${itemText1},${itemText2}`;

      if (hash in tried) {
        continue;
      }

      tried.add(hash);

      console.log(`Clicking ${itemText1}, ${itemText2}`);

      document.getElementById(`item-${itemText1}`).click();
      document.getElementById(`item-${itemText2}`).click();

      console.log("waiting 100ms");
      await sleep(100);
    }
  }

  console.log("");
};

const run = async () => {
  while (true) {
    await loopThroughAll();
  }
};

run();
