(function(angular) {
	
	"use strict";
	
	angular.module("WidgetApp.Services", []);
	angular.module("WidgetApp.Filters", ["WidgetApp.Services"]);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);
	
	angular.module("WidgetApp", ["ui.router", "WidgetApp.Controllers", "WidgetApp.Filters"])
		.run(function($templateCache) {
			
			$templateCache.put("tpls/home.html", `
				<div>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Color</th>
								<th>Size</th>
								<th>Qty</th>
								<th>Action</th>
							</tr>
						<thead>
						<tr ng-repeat="widget in widgets">
							<td>{{widget.name}}</td>
							<td>{{widget.color | colorName}}</td>
							<td>{{widget.size}}</td>
							<td>{{widget.quantity}}</td>
							<td>
								<button type="button" ui-sref="edit({ widgetId: widget.id })">Edit</button>
								<button type="button" ui-sref="view({ widgetId: widget.id })">View</button>
							</td>
						</tr>
					</table>
				</div>
				
				<div>
					<button type="button" ui-sref="create()">Create</button>
				</div>
			`);
			
			$templateCache.put("tpls/view.html", `
				<div>
					<p>
						ID: {{widget.id}}<br>
						Widget Name: {{widget.name}}<br>
						Widget Color: {{widget.color}}<br>
						Widget Size: {{widget.size}}<br>
						Widget Quantity: {{widget.quantity}}<br>
					</p>
				</div>
				<button ui-sref="edit({ widgetId: widget.id })">Edit</button>
				<button ui-sref="home()">Return to List</button>
			`);
			
			$templateCache.put("tpls/edit.html", `
				<style>
					input.ng-valid {
						border: 1px solid green;
					}
					input.ng-invalid.ng-touched {
						border: 1px solid red;
					}
				</style>
				
				<form novalidate name="widgetForm">
					<div>
						<div>
							<label>Name: <input ng-model="widget.name" name="widgetName" required></label>
							<span ng-show="widgetForm.widgetName.$invalid && widgetForm.widgetName.$touched">Please enter a valid name</span>
						</div>
						<div>
							<label>Color:
								<select ng-model="widget.color"  name="widgetColor"
										ng-options="color.code as color.name group by color.category for color in colors" required></select>
							</label>
							<span ng-show="widgetForm.widgetColor.$invalid && widgetForm.widgetColor.$touched">Please enter a valid color</span>
						</div>
						<div>
							<label>Size: <input ng-model="widget.size" name="widgetSize" required></label>
							<span ng-show="widgetForm.widgetSize.$invalid && widgetForm.widgetSize.$touched">Please enter a valid size</span>
						</div>
						<div>
							<label>Quantity: <input ng-model="widget.quantity" name="widgetQuantity" type="number" required></label>
							<span ng-show="widgetForm.widgetQuantity.$invalid && widgetForm.widgetQuantity.$touched">Please enter a valid number</span>
						</div>
					</div>
					<button type="button" ng-click="saveWidget()" ng-disabled="widgetForm.$invalid">Save</button>
					<button type="button" ng-if="widget.id" ng-click="deleteWidget()">Delete</button>
					<button type="button" ui-sref="home()">Return to List</button>
				</form>
			`);
			
		});
	
})(angular);