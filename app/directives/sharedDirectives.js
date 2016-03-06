(function(){
	
	angular.module('app')
		.directive('sharedDirective', function(){
			return{
				template: 'Name: {{ user.name }} Street: {{ user.street }}'
			};
	});
	
	
}());