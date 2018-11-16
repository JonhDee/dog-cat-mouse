var Cat=require('./cat');
var Mouse=require('./mouse');
var Dog=require('./dog1');

var cat=new Cat();
var mouse=new Mouse('Mickey');
var dog=new Dog();
try{
	cat.eat(mouse);
}catch(error){
	console.log('error while cat eat animal # mouse');
}
console.log(cat);