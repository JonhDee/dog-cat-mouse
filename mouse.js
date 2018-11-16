function mouse(){
	this.name:name;
}
mouse.prototype.die=function(){
	this.dead=true;
}

module.exports=mouse;