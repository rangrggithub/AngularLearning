(function(){
	var CustomersFactory = function($http){
		
		var factory= {};
		factory.getCustomers = function(){
		//	return customers;
			return $http.get('/customers');
		}
		
		
		factory.getCustomer = function(customerId){
			return $http.get('/customers/' + customerId);
			
			/*for(var i=0, len = customers.length; i<len; i++) {
				if (customers[i].id === parseInt(customerId)) {
					return customers[i];
				}
			}
			return {};*/
		}
		
		factory.getOrders = function(){
			//return orders
			return $http.get('/orders');
		}
		
		return factory;
	};
	
		
	
	angular.module('app')
		.factory('CustomersFactory', [
		'$http',
		CustomersFactory]);
	
}());