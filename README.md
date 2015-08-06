
## Outline:


### Introduction
	* Problem - overloaded controllers
	* Problem - lack of consistency
	* cohesive reliable patterns
	* Lots of angular training and talks about models usually push a library
	* 
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
	Use of Promises will be extensive, Working knowledge of promises is essential for building web applications period.
	

### Cross-Module Data Access
	Factory with object with single data property
	Taking advantage of JavaScripts passing references


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


