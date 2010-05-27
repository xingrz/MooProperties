/*
---
description: Property feature for Class

license: MIT-style

authors:
- chenxingyu

requires:
- Core/Function
- Core/Class.Extras

provides: [Properties]
...
*/

var Properties = new Class({
	properties: {},
	set: function (name) {

		var args = $A(arguments);
		//remove the first argument 
		args.shift();
		//some code 
		if(this.properties[name] && typeof this.properties[name].set == 'function') this.properties[name].set.apply(this, args);
		else this.property[name] = args[1];

		return this
	},

	//note, we can pass more than one argument to the getter 
	get: function (name) {

		var args = $A(arguments);
		args.shift();
	
		return this.properties[name] && typeof this.properties[name].get == 'function' ? this.properties[name].get.apply(this, args) : this.properties[name];
	}
});