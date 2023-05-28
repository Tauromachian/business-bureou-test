export function getContrast(hexColor) {
  if (hexColor.slice(0, 1) === "#") {
    hexColor = hexColor.slice(1);
  }
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }
  var r = parseInt(hexColor.substr(0, 2), 16);
  var g = parseInt(hexColor.substr(2, 2), 16);
  var b = parseInt(hexColor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

// Returns color
export function getCssColor(color, vuetifyThemeVariables) {
  // Create a new div and apply the color as a background
  let div = document.createElement("div");
  div.style.backgroundColor = color;
  document.body.appendChild(div);

  // Computed style will be 'rgba(0, 0, 0, 0)' if the color is not valid
  let isValidColor =
    getComputedStyle(div).backgroundColor !== "rgba(0, 0, 0, 0)";

  document.body.removeChild(div);

  // If it's a valid color, return the color
  if (isValidColor) {
    return color;
  }

  if (vuetifyThemeVariables) {
    return vuetifyThemeVariables[color];
  }

  // If it's not a valid color, check if it's a valid CSS variable
  let computedColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--v-theme-${color}`.trim());
  if (computedColor) {
    return `rgb(${computedColor.trim()})`;
  }

  // If it's not a valid color or CSS variable, return null
  return null;
}
