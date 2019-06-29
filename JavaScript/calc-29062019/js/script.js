/**
 * Bind click event on copiable elements
 */
document.querySelectorAll("td.copy").forEach(function (el) {
  el.onclick = function () {
    //document.querySelector('#output').textContent = document.querySelector('#output').textContent + this.textContent;
    document.querySelector("#output").textContent += this.textContent;
  };
});

/**
 * clears display
 */
document.getElementById("clear").onclick = function () {
  document.querySelector("#output").textContent = "";
};

/**
 * calculates final result
 */
document.getElementById("calculate-result").onclick = function () {
  try {
    document.querySelector("#output").textContent = eval(document.querySelector("#output").textContent);
  } catch (e) {
    document.querySelector("#output").textContent = "Error";
  }
};

/**
 * Calculates square of an integer
 */
document.getElementById("square").onclick = function () {
  try {
    var n = document.querySelector("#output").textContent;
    document.querySelector("#output").textContent = n * n;
  } catch (e) {
    document.querySelector("#output").textContent = "Error";
  }
};
