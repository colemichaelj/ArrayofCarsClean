const cars = ['ford','honda','toyota','hyundai'];
console.log(cars.length)
const morecars = [  'chevy','subaru','mercedes','honda'];
const totalcars = cars.concat(morecars);
console.log (totalcars);
var a = totalcars.indexOf("honda");
console.log (a);
var b = totalcars.lastIndexOf('ford');
console.log(b);
var stringOfCars = totalcars.join();
console.log(stringOfCars)
var  d = totalcars 
d = stringOfCars.split()
console.log(totalcars)
const carsInReverse = totalcars.reverse()
console.log(carsInReverse)
const sortedarr = carsInReverse.sort()
console.log(sortedarr)

const removedcars = carsInReverse.slice(1,3)
console.log(removedcars)
const splicedarr = carsInReverse.splice(2,3,'ford','honda');
console.log(splicedarr);
const othercars = carsInReverse.push('ford','honda');
console.log(othercars);
console.log(carsInReverse.pop() );
console.log(carsInReverse.shift());
const newcararray = carsInReverse.unshift('bmw' ,'kia'); 
console.log(newcararray)

const numbers =['23', '45', '0', '2' ]

numbers.forEach(numbers=> console.log(numbers +2));

