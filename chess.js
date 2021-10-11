let units = 12;

let chess = "";

for (let y = 0; y < units; y++) {
  for (let x = 0; x < units; x++) {
    if ((x + y) % 2 == 0) {
      chess += " ";
    } else {
      chess += "#";
    }
  }
  chess += "\n";
}

console.log(chess);
