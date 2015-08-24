## Outline:

### Introduction
+ Problem - overloaded controllers
+ Problem - lack of consistency
+ cohesive reliable patterns
+ Lots of angular training and talks about models usually push a library
+ I miss backbone

### What this is
This is a set of factory service patterns that have served me well building larger Angular applicatons.

### What You Will Not Find Here:
**The way.** These are patterns I have found helpful in building my apps.  I hope you find something helpful here. 
there is something here for you to take away and adapt to your problems.

**Dependency on a particular data framework.** There are a number of libraries that offer enormous functionality regarding data managment.  Examples are breezejs, JsData and others.  I only mention them for sake of information. 
The only *dependency* these patterns contain (outside of angularjs itself) will be lodash, which can easily be replaced with native functions

### Objectives
Examples using best practices the excellent style guide of John Pappa and Ward Bell.
Focus on simplicity - Introduce complexity only when required.

### Key Ideas:
**The focus is on the *story.* of the data**
Sometimes it's simple:
+ data model is empty
+ fetch and store the data in the model
+ Present data to user to view

Or more complex:
+ Data model is empty
+ User generates model data
+ model is validated
+ model invalid -> user alerted
+ model valid -> model POST
+ 

The models will be housed in the angular factory module.


### benefits of these patterns
**Facilitates *organic* development.** Over the course of development, functionality often changes and grows.  This on-the-fly functionality often gets put 



### Assumptions
+ You know JavaScript fundamentals
+ You know and understand the fundamentals of Angularjs.
+ Use of Promises will be extensive, Working knowledge of promises is essential for building web applications period.
	

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


