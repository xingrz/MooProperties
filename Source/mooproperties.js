/*
---
description: Property feature for Class

license: MIT-style

anthors:
- chenxingyu

requires:
- Core/Function
- Core/Class.Extras

provides: [Properties]
...
*/

var Properties = new Class({
	set: function(key, value)
	{
		if (!this.properties) return null;
		if (!this.properties[key]) return null;
		if (!this.properties[key].set) return null;
		if ($type(this.properties[key].set) != 'function') return null;
		
		this.properties[key].set.bind(this).run(value);
		return value;
	},
	
	get: function(key)
	{
		if (!this.properties) return null;
		if (!this.properties[key]) return null;
		if (!this.properties[key].get) return null;
		if ($type(this.properties[key].get) != 'function') return null;
		
		return this.properties[key].get.bind(this).run();
	}
});