angular
	.module('app')
	.factory('pojo', pojoFactory);
	
function pojoFactory(){
	var service = {
		data : {}	
	};
	
	return service;
}