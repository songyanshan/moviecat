(function(angular){
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('moviecat', [
	'ngRoute',
	'moviecat.movielist',
	'moviecat.directives.auto-focus'
	])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters'});
	}])

	.controller('navController',['$scope','$location',function($scope,$location){
		// $scope.type = $routeParams.category;
		// 由于category不属于这个模块，所以取不到值
		$scope.$location = $location;
		$scope.$watch('$location.path()',function(now){
			if(now.startsWith('/in_theaters')) {
				$scope.type = 'in_theaters';
			}else if(now.startsWith('/coming_soon')){
				$scope.type = 'coming_soon';
			}else if(now.startsWith('/top250')){
				$scope.type = 'top250';
			}
		})
	}])

	.controller('searchController',['$scope','$route',function($scope,$route){
		$scope.input = '';   //取文本框的输入
		$scope.search = function(){
			console.log($scope.input);
			$route.updateParams({category:'search',q:$scope.input});
		}
	}]);
})(angular);


