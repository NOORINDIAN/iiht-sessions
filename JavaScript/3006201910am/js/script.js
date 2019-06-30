document.querySelector("button").onclick = function (e) {
  e.preventDefault();
  var value1 = document.querySelector('[name="txt1"]').value;
  document.querySelector('[name="txt2"]').value = value1;
};
