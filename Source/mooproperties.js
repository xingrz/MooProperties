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
	set: function (name)
	{
		if ($type(name) == 'object')
		{
			var pties = $H(name);
			pties.each(function(v, n) {
				this.set(n, v);
			}, this);
		}
		else
		{
			var args = $A(arguments);
			args.shift();
			
			if (this.properties[name] && $type(this.properties[name].set) == 'function')
			{
				this.properties[name].set.apply(this, args);
			}
			else
			{
				this[name] = args[0];
			}
		}
		return this;
	},
	get: function (name) {
		var args = $A(arguments);
		args.shift();
		
		if (this.properties[name] && $type(this.properties[name].get) == 'function')
		{
			return this.properties[name].get.apply(this, args);
		}
		else
		{
			return this[name];
		}
	}
});