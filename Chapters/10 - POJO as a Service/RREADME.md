# POJO as a Service

**TL;DR:** Create your POJO data models into a service, behind a ```data``` property.

**Example:**
```javascript
//person.model.js
angular
	.module('app.models')
	.factory('person', pojoFactory);
	
function personFactory(){
	var model = {
		data : {
			name : 'John Doe',
			email : 'email@email.com'
		}
	};
	return model;
}
```
```javascript
//app.controller.js
angular
	.module('app')
	.controller('AppController', AppController);

function AppController(person){
	var app = this;
	app.person = person;
}
```
```html
<!-- person.html -->
<div>
	{{app.person.data.name}} : {{app.person.data.email}}
</div>
```

##Explanation
***Why inside a factory?***

It future proofs future development.
The data is available for other modules to use, not just child scopes and controllers.
Since it's injected as dependency it makes it very clear
Second, creating the model first inside of a factory allows for clearer, unambiguous sharing between controllers and other angular modules.



## Where does your model live?
Angular's module and dependency injection system works very well.

Your data is important give it it's own home.




## Usage in Single Controller

**Model Service**
```javascript
function modelFactory(){
	var model = {
		x : 4,
		y : 5
	};
	
	return model;
}
```

**Controllers**
```javascript
function FooController($scope, model){ //pojo added as a dependency
	var cntrl = this;
	
	cntrl.model = model;
	
	$scope.$watch('cntrl.model', onModelChange);
	
	function onModelChange(){
		
	}
}
```

**Template**
```html
<div ng-controller="FooController as cntrl">
	foo: {{cntrl.pojo.data.foo}} <!-- //bar -->
</div>
```

## Usage across multiple controllers


**Why Not just put this in the Parent Controller and be done with it?**
For really simple apps with one controller, go for it. It's no big deal. 
However, if you have multiple controllers, either child or sibling placing the model
relying on a model placed on a parent $scope, creates a *phantom* dependency.

Consider the following:

```javascript
//ANTI-PATTERN

//parent-controller.js
angular
	.module('app')
	.controller('ParentController', ParentController);
	
function ParentController($scope){
	$scope.model = {};
}

//child-controller.js
function ChildController($scope){ //<!- Dependency NOT listed
	
	$scope.$watch('model', onModelChange);//<!-- model is a dependency
	
	function onModelChange(newModelValue){
		//do stuff inside ChildController
	}
}
```
### Store State Information
Examples are 

The above code will work, but if a bug arises that involves model debugging could prove difficult.

### Store common data
user