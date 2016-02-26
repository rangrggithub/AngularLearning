//Option 2
//(function() {
//	
//angular.module('app')
//	.controller('SampleControllerNG', ['$scope', function($scope){
//  
//    $scope.customers=[
//            {name:'Henry', age: 30, city: 'New York', country: 'USA', salary: '20.9912', DOB: '1985-01-17'},
//            {name:'Ram', age: 20, city: 'Thimphu', country: 'Bhutan', salary: '11.0912', DOB: '1996-02-11'},
//            {name:'Tina', age: 19, city: 'Kathmandu', country: 'Nepal', salary: '8.312', DOB: '1996-11-15'},
//            {name:'Jack', age: 35, city: 'Paris', country: 'France', salary: '14.5912', DOB: '1981-12-10'},
//            {name:'Sarita', age: 15, city: 'Honkong', country: 'China', salary: '10.7812', DOB: '2000-02-28'}]; 
//    
//    $scope.doSort = function(propName){
//        $scope.sortBy = propName;
//        $scope.reverse = !$scope.reverse;
//    };
//    
//}]);

//}());
    
//Option 3
    
(function() {
	// When you use Factory inject CustomersFactory
	
	function CustomersController($scope, $log, CustomersFactory, appDesc){
  		$scope.customers = [];
		$scope.appDesc = appDesc;
		
		function init(){
			CustomersFactory.getCustomers()
				.success(function(customers) {
				$scope.customers = customers;
			})
				.error(function(data, status, headers, config) {
				// Handle error
			//	$log.log(data.error+ ' '+ status);
				
			});
		//	$scope.customers = CustomersFactory.getCustomers();
			
		}
		
	init();
    
    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
    
};
	
angular
	.module('app')
	.controller('CustomersController', [
		'$scope',
		'$log',
		'CustomersFactory', 
		'appDesc',
	CustomersController]);

}());