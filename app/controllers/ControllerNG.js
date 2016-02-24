//Option 1

//var app = angular.module('app', []);

app.controller('ControllerNG',['$scope', function($scope){
    $scope.sortBy = 'name';
    $scope.reverse = !$scope.reverse;
    
    $scope.customers=[
            {name:'Henry', age: 30, city: 'New York', country: 'USA', salary: '20.9912', DOB: '1985-01-17'},
            {name:'Ram', age: 20, city: 'Thimphu', country: 'Bhutan', salary: '11.0912', DOB: '1996-02-11'},
            {name:'Tina', age: 19, city: 'Kathmandu', country: 'Nepal', salary: '8.312', DOB: '1996-11-15'},
            {name:'Jack', age: 35, city: 'Paris', country: 'France', salary: '14.5912', DOB: '1981-12-10'},
            {name:'Sarita', age: 15, city: 'Honkong', country: 'China', salary: '10.7812', DOB: '2000-02-28'}];
    
    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
    
    
}]);





//function SimpleController($scope){
//            $scope.sortBy = 'name';
//            $scope.reverse = !$scope.reverse;
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
//}