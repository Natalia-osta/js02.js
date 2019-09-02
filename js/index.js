/*for (let i = 100; i >= 0; i--){
   if (i % 2 === 0 && i % 10 !== 0) {
        document.write(i + '<br>');
   }
}*/
/*
let i = 0;
while(i < 100) {
    document.write(i + '<br>');
    i++;
}
let i = 0;
do {
    document.wrile(i + '<br>');
    i++;

} while (1 < 100);*/

/*let num =parseFloat(prompt('Enter number'));
while (isNaN(num)) {
    alert('You enter not a number!');
    num = parseFloat(prompt('Enter number'));
}

*/

/*let products =['Tesla X','Tesla S','BMW i3'];
products[3] = 'Tesla Y';
products.push('Zaz Sens', 'Chevy Corvette');
products[6] = 'Tesla 3';
products.push('Zaz Sens 5');
products[10] = 'Toyota Corolla';
console.log(products.length);

for (let i = 0; i < products.lenght; i++) {

    console.log(products[i]);
}

products.forEach(printElement);

function printElement(element) {
    console.log(element)

}
products.forEach(function(element) {
    console.log(element);
});*/

products.forEach( el=> console.log(el) );
