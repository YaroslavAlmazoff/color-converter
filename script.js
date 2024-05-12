const rField = document.querySelector("#r");
const gField = document.querySelector("#g");
const bField = document.querySelector("#b");
const hexField = document.querySelector("#hex");

const rgbArrow = document.querySelector("#rgb-arrow");
const hexArrow = document.querySelector("#hex-arrow");

const hexResult = document.querySelector("#hex-result");
const rgbResult = document.querySelector("#rgb-result");

const hexResultColor = document.querySelector("#hex-result-color");
const rgbResultColor = document.querySelector("#rgb-result-color");

function rgbToHex(r, g, b) {
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  } else {
    throw new Error("Ошибка");
  }
}

function hexToRgb(hex) {
  if ((hex.length === 6 || hex.length == 3) && /^[0-9A-Fa-f]$/.test(hex)) {
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    return rgbColor;
  } else {
    throw new Error("Ошибка");
  }
}

const checkRGB = () => {
  const r = Number(rField.value);
  const g = Number(gField.value);
  const b = Number(bField.value);

  try {
    const result = rgbToHex(r, g, b);
    rgbArrow.classList.add("animated-arrow");
    hexResult.textContent = result;
    hexResultColor.style.backgroundColor = result;
    hexResultColor.style.display = "block";
  } catch (e) {
    hexResult.textContent = e;
  }
};

const checkHex = () => {
  const hex = hexField.value;

  try {
    const result = hexToRgb(hex);
    hexArrow.classList.add("animated-arrow");
    rgbResult.textContent = result;
    rgbResultColor.style.backgroundColor = result;
    rgbResultColor.style.display = "block";
  } catch (e) {
    rgbResult.textContent = e;
  }
};

rField.addEventListener("input", checkRGB);
gField.addEventListener("input", checkRGB);
bField.addEventListener("input", checkRGB);

hexField.addEventListener("input", checkHex);
