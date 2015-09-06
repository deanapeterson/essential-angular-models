# Introduction
## Building Angular Applications the *Right* Way
I have built a number of Angular applications over the past few years. Just like most developers, my experience learning Angular has had it's highs and lows.  Much like the now (in)famous blog post by Ben Nadel (need link).  The highs are reflected in the amazing amount of functionality that comes from Angular's binding method, expressions and native directives.  There is something wonderful when an app comes together with a minimal amout of code.

The lows really start when starting to learn how write directives, provider vs factory vs service, what the heck is 'transclusion?'

The question that I'm always plagued by when creating an application is **how do I build this the right way?**  The corallary question is **What are the criteria that determines what the *right* way is?**

I'm a very pragmatic developer, 

My working Criteria:
- Applications are easy to understand and reason with by the next guy (not you)
- Scalable and extensible without hacking (
- Clear, Inteligent abstractions of key pieces of functionality for the app
- Modularity

This series is NOT about directives or how best to structure your application. This is about how to build data models from the ground up that facilitate applications that will inevitably need to scale and be maintainable.

## Better Models === Cleaner controllers
Beginners to building applications with Angular almost always over-rely on controllers to do all the dirty work.  It's understandable, developers want to "see" something happen ASAP and that means writing out View markup and binding data inside the controllers.

This plus the inherent nature of UI development: Stack-holders, fuzzy requirements, late added requirements.
Leads to huge controllers that makes ongoing development difficult.

One way to head much of this off at the pass is to identify the key data models as early in the development process as possible and abstracting them outside the controller into a service module(factory).



### What You Will Find Here:
This is a set of factory service patterns that have served me well building larger Angular applicatons.
This series of articles will provide a template for building Data models that can withstand the rigours and pitfalls inherent in modern UI development and help provide a 

### What You Will Not Find Here:
**Dogmatic methodology** These are patterns *I* have found helpful in building my apps. You may find things you disagree with (please share what they are and why.)  That 

**Dependency on a particular data framework** There are a number of data management libraries that integrate into Angular. Examples are Breezejs, JsData and others. I have not used any of these libraries. In my development, I prefer to rely on libraries only when it is clear the 

The only *dependency* these patterns may contain (outside of angularjs itself) will be underscore/lodash.  It is used to keep the code as clean as possible.

### Key Areas of Focus
**Simplicity**  Keeping things simple as possible is essential.
**Best Practices** Examples written using best practices the excellent style guide of John Pappa and Ward Bell.
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

Part One: Key Principles and Base Patterns


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


