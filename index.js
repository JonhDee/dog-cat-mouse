var Dog=require('./dog1');
var Cat=require('./cat');
var dog=new Dog('Tom');
dog.sayHi();
var tom=new Cat();
dog.eat(tom);
console.log(dog);