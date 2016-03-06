(function (){
	
	angular.module('app')
		.directive('isolateScopeWithString', function(){
		return{
			scope : {
				name: '@'
			},
			template: 'Name: {{name}}'
		};
	});
}());