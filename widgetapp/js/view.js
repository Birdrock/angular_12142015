(function(angular) {
	
	ctrl.$inject = ["$scope", "widgets2", "$stateParams"];
	
	function ctrl($scope, widgets, $stateParams) {
		
		widgets.get($stateParams.widgetId).then(function(results) {
			$scope.widget = results.data;
		});
		
		// $scope.widget = widgets.get(parseInt($stateParams.widgetId, 10));
		
	}
	
	angular.module("WidgetApp.Controllers")
		.controller("ViewController", ctrl);
	
})(angular);