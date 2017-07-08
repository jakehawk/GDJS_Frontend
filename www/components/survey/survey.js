
angular
	.module('app')
	.component('survey', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/survey/survey.html"
	})
function controller($scope, $state, $ionicSlideBoxDelegate) {
  var vm = this
  vm.name = 'survey'

	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};

	// Called each time the slide changes
	$scope.slideChanged = function(index) {
		$scope.slideIndex = index;
	};
}
