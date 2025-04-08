// Algselt kirjutasin saidi koodi ise, kuid mitte täielikult. 
// Järgmisena saatsin ChatGPT-le kõik 3 faili ja ütlesin "Make 3 files: index.html, index.js and style.css. 
// I want to make a clock that can be used in TV Production on live events. Name is Nikita Vassiljev. 
// GitHub URL is https://github.com/nvassiljev-tlu/1kodutoo. Make all comments in Estonian, however, write comments if necessary. 
// Follow instructions strictly."
// Olen esitanud ka kõik punktid, mis tuleb täita.

// Defineerime kõik muudetavad elemendid
const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const container = document.getElementById("clockContainer");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const bgColorPicker = document.getElementById("bgColorPicker");
const textColorPicker = document.getElementById("textColorPicker");
const fontSelector = document.getElementById("fontSelector");
const toggleFormat = document.getElementById("toggleFormat");
const resetButton = document.getElementById("reset");

let use24Hour = true;

// Funktsioon kella uuendamiseks iga sekund
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const dayNames = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
  const dayName = dayNames[now.getDay()];
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  let ampm = "";
  if (!use24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  dateEl.textContent = `${dayName}, ${day}.${month}.${year}`;
}

// EventListener’id kella muutmiseks

// 1. Font size
fontSizeSlider.addEventListener("input", () => {
  clock.style.fontSize = fontSizeSlider.value + "px";
});

// 2. Taustavärv
bgColorPicker.addEventListener("input", () => {
  document.body.style.backgroundColor = bgColorPicker.value;
});

// 3. Numbrite värv
textColorPicker.addEventListener("input", () => {
  clock.style.color = textColorPicker.value;
  dateEl.style.color = textColorPicker.value;
});

// 4. Kirjatüüp
fontSelector.addEventListener("change", () => {
  clock.style.fontFamily = fontSelector.value;
  dateEl.style.fontFamily = fontSelector.value;
});

// 5. 12/24 tunni formaadi vahetus
toggleFormat.addEventListener("click", () => {
  use24Hour = !use24Hour;
  updateClock();
});

// 6. Lähtestusnupp
resetButton.addEventListener("click", () => {
  fontSizeSlider.value = 80;
  clock.style.fontSize = "80px";
  document.body.style.backgroundColor = "#282c34";
  clock.style.color = "white";
  dateEl.style.color = "white";
  clock.style.fontFamily = "'Orbitron', sans-serif";
  dateEl.style.fontFamily = "'Orbitron', sans-serif";
  use24Hour = true;
  updateClock();
});

// Kella uuendamine intervalliga
updateClock();
setInterval(updateClock, 1000);
resetButton.click(); // Seadista algväärtused
