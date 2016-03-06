(function(){
	
	angular.module('app')
		.directive('isolateDirective', function(){
		return{
			scope : {},
			template: 'Name: {{user.name}} Street: {{user.street}}'
		};
	});
	
}());