# CRUD Methods
## Introduction
Not all models start in the client, many (most?) originate from a RESTful endpoint or API.

Here is a simple example of a model with a simple copy method added:

```javascript
angular
	.module('app')
	.factory('model', modelFactory);
	
function modelFactory($http){
	var baseUrl = 'base-url/';
	var model = {
		data : {},
		get : get,
		update : update
	};
	
	return model;
	
	function get(params){
		return $http.get(baseUrl, {
			params : params
		}).then(function(response){
			model.data = response.data;
			return model.data;
		})
	}
	
	
}
```

## The impact on the controller calling a model method

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


### in Directives
Cross the isolate scope barrier


### 