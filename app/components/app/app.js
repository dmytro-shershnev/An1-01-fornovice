(function() {
	"use strict";

	// app
	angular
		.module("app", ["common"])
		.controller("Todo", Todo)
		.run(runApp)
		.value("model", {
			"user": "Vitaliy",
			"userPhoto": "images/VZ.jpg"
		});

	function Todo(model, todoService) {
		let $ctrl = this;

		$ctrl.todo = model;
	}

	function runApp(model, tasksService) {
		tasksService.getData().then((data) => {
			model.items = data;
		});
	}

	// bootstrap app
	angular.element(document).ready(function() {
		angular.bootstrap(document, ["app"]);
	});

})();