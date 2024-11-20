let i = 0;

while (i <= 100) {
  console.log(i);

  if (i % 2 === 0) {
    console.log("Pair");
  } else {
    console.log("Impair");
  }

  if (i <= 50) {
    i = i + 2;
  } else {
    i = i + 3;
  }
}
