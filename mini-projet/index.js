let number = Math.floor(Math.random() * 100) + 1;
let win = false;

while (!win) {
  let guess = parseInt(prompt("Devinez un nombre entre 1 et 100"));
  if (guess === number) {
    win = true;
    alert("Vous avez gagné ! Le nombre était " + number);
  } else if (guess < number) {
    alert("Le nombre est plus grand");
  } else {
    alert("Le nombre est plus petit");
  }
}
