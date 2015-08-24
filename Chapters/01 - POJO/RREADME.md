# POJO - Plain Old JavaScript Objects

## Introduction

```javascript
angular
	.module('app')
	.factory('pojo', pojoFactory);
	
function pojoFactory(){
	var model = {
		data : [String, Number, Array, Object, Boolean, Null]
	};
	
	return model;
}
```

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