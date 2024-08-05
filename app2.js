window.onload = () => {
  let suits = ["♦ , ♥ , ♠ , ♣"];
  let number = ["2, 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10"];
  
  // Escoger del arreglo
  function createSN() {
    const randomSuit = Math.floor(Math.random() * suits.length);
    const randomNumber = Math.floor(Math.random() * number.length);
    document.getElementById("SIsymbol").innerHTML = randomSuit;
    document.getElementById("numb3r").innerHTML = randomNumber;
  }
  createSN();
};

