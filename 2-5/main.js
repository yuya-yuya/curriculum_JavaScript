function changeLang(){
  let ta1 = document.getElementById("lng").value;
  let table = document.getElementById("table");

  var jap = table.rows[0];
  var eng = table.rows[1];

  switch(ta1){
    case "日本語":
      jap.style.display = "block";
      eng.style.display = "none";
      break; 
    case "English":
      eng.style.display = "block";
      jap.style.display = "none";
      break;
    case "全て表示":
      eng.style.display = "block";
      jap.style.display = "block";
      break;
  }

  console.log(ta1);
}