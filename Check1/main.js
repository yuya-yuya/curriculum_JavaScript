// 問1
let numbers = [2, 5, 12, 13, 15, 18, 22];

for(i = 0;i < numbers.length;i++){
  if(numbers[i] % 2 === 0){
    isEven(numbers[i]);
  }
}

function isEven(num){
  console.log(num + 'は偶数です');
}

// 問2
class car{
  constructor(gass,num){
    this.gass = gass;
    this.num = num;
  }

  getNumGas(){
    console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
  }
}

let x = new car();
x.getNumGas();