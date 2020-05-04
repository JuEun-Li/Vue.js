function sum(a) {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        result = result + a[i];
    }
    return result;
}

function test_sum(b) {
    let a = [];
    for (let i = 0; i < 5; i++) {
        a[i] = Math.floor(Math.random() * 11 + 0);
    }
    console.log(a);
    console.log(b(a))
}

for (let i = 0; i < 5; i++) {
    test_sum(sum);
}