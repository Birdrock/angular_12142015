(function(angular) {
	
	"use strict";
	
	angular.module("WidgetApp.Services", []);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);
	
	angular.module("WidgetApp", ["ui.router", "WidgetApp.Controllers"])
		.run(function($templateCache) {
			
			$templateCache.put("tpls/home.html", `
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Color</th>
							<th>Size</th>
							<th>Qty</th>
							<th>Action</th>
						</tr>
					</thead>
					<tr ng-repeat="widget in widgets">
						<td>{{widget.name}}</td>
						<td>{{widget.color}}</td>
						<td>{{widget.size}}</td>
						<td>{{widget.quantity}}</td>
						<td>
							<button ng-click="">Edit</button>
							<button ng-click="">View</button>
						</td>
					</tr>
				</table>
			`)
			
		});
	
})(angular);