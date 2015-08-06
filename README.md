
## Outline:


### Introduction
	* Problem - overloaded controllers
	* Problem - lack of consistency
	* cohesive reliable patterns
	I miss backbone

### What this is
	a collection of patterns I have found useful



### What this is not
	The way
	Not advocating a library - helpful patterns
	client to server syncronization - firebase/$resource

### Restrictions:
	Almost always use module().factory()
	Never use .service
	No Additional libraries 
	No added data management libraries (Breeze, JSData, Restangular)
	lodash/underscore recomended but not required.

### Assumptions
	Been using Angularjs for awhile



### Cross-Module Data Access
	Factory with object with single data property


### State Model
	*data property
	*using object by reference
	access methods
	
	
	
### Immutable Object Model




### Rest Object


### Collection Model


### Advanced Collection
	item with 




Using objects by reference


All objects contain 
	data {
		data : Primitive, {} || []
	}


cross-module communication

Model Object



Collections


