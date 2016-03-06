(function(){
	
	angular.module('app')
		.directive('helloWorld', function(){
		return{
			template: 'HELLO! WELCOME '
		};
	});
	
}());