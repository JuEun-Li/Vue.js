let a = [];
let is_even = 0;
let sum_even = 0;

for(let i = 0; i < 100; i++) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}

function callback(a, b) {  
  return a + b; 
}

is_even = a.filter((e) => e % 2 == 0);
sum_even = is_even.reduce(callback);

console.log(a);
console.log(sum_even);