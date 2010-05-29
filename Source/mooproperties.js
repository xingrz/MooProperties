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

		if($type(name) == 'object') {
		
			$each(name, function (value, key) { this.set(key, value) }, this);
			return this
		}
		
		var args = $A(arguments);
		//remove the first argument 
		args.shift();
		
		//some code 
		if(this.properties[name] && typeof this.properties[name].set == 'function') this.properties[name].set.apply(this, args);
		else this.properties[name] = args[0];

		return this
	},

	//note, we can pass more than one argument to the getter 
	get: function (name) {

		var args = $A(arguments);
		args.shift();
	
		return this.properties[name] && typeof this.properties[name].get == 'function' ? this.properties[name].get.apply(this, args) : this.properties[name];
	},
	
	//define setter/getter
	setProperty: function(name, property) {
	
		this.properties[name] = property;
		
		return this
	},
	
	removeProperty: function(name) {
	
		delete this.properties[name];
		
		return this
	},
	
	setProperties: function(properties) {
	
		$each(properties, function (property, name) { this.setProperty(name, property) }, this);
		return this
	}
});