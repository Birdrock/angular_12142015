(function(angular) {
	
	ctrl.$inject = ["$scope", "widgets2"];
	
	function ctrl($scope, widgets) {
		
		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});
		
		// $scope.widgets = widgets.getAll();
		
	}
	
	angular.module("WidgetApp.Controllers")
		.controller("HomeCtrl", ctrl);
	
})(angular);