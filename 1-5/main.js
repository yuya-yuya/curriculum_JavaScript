function createJuice(fruits){
  var x =(`${fruits}を受け取りました。ジュースにして返します
  ${fruits}が届きました`);
  return x;
}

console.log(createJuice("みかん"));
