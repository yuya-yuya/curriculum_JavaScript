function changeLang(){
  let ta1 = document.getElementById("lng").value;
  let jap = document.getElementById("jap");
  let eng = document.getElementById("eng");

  switch(ta1){
    case "日本語":
      document.inner = "hj";
      break;
    case "English":
      tr.textContent = "atjal";
      break;
    case "全て表示":
      tr.textContent = "chg";
      break;
  }

  console.log(ta1);
}