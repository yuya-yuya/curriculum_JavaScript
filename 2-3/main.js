let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
  const results = ['大吉','中吉','凶'];
  const n = Math.floor(Math.random()*2);
  btn.textContent = results[n];
  });
