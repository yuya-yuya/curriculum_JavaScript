function addText() {
  var ta1 = document.getElementById("text1").value;
  document.getElementById("area1").value +=ta1 + "\n";
}

function deleteText() {
  let ta2 = document.getElementById("area1");
  ta2.value = "";
}