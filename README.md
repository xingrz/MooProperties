MooProperties
=========

MooProperties is a MooTools plugin that allows you to add set/get properties support to your Class like Native.


How to Use
---------

MooProperties can be implemented in a Class easily like Events and Options class.

In many case you may also need to implement the Options class, but it's not necessary.

	var MyClass = new Class({
		Implements: [Options, Properties],
		
		options: {
			myName: 'Moo',
			myAge: 18
		},
		
		// An Object defining properties to set/get
		properties: {
			// The property 'Name'
			name: {
				set: function(value) //Executes when call the 'set' method like myClass.set('name', 'Tom')
				{
					// .. Do something you want ...
					this.options.myName = value; //Set the value
				},
				get: function()	//Executes when call the 'get' method like myClass.get('name')
				{
					// .. Do something you want ...
					return this.options.myName; //Return the value
				}
			},
			age: {
				set: function(value)
				{
					this.options.myAge = value;
				},
				get: function()
				{
					return this.options.myAge;
				}
			}
		},
		
		initialize: function(options)
		{
			this.setOptions(options);
			
			// your codes....
		}
	});

Now you can do things like:

	var myClass = new MyClass();
	myClass.set('name', 'Tom');	//Set the property 'Name' to 'Tom'
	myClass.get('age');	//Return 18.