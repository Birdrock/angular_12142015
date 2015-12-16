(function(angular) {
	
	function factory() {
		
		var colors = [
			{ code: "blue", name: "Blue", category: "Budget"},
			{ code: "red", name: "Red", category: "Premium"},
			{ code: "orange", name: "Orange", category: "Standard"},
			{ code: "purple", name: "Purple", category: "Premium"},
			{ code: "green", name: "Green", category: "Premium"},
			{ code: "teal", name: "Teal", category: "Premium"}
		];
			
		return {
			getColors: function() {
				return colors;
			},

		};
		
	}
	
	angular.module("WidgetApp.Services")
		.factory("colors", factory)
	
})(angular);