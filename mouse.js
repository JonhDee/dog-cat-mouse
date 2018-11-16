function mouse(name){
	this.name=name;
}
mouse.prototype.die=function(){
	this.dead=true;
}

module.exports=mouse;