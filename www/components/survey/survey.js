
angular
	.module('app')
	.component('survey', {
	  bindings: {
	  	closeMeta: '&'
	  },
	  controller: controller,
	  templateUrl: "components/survey/survey.html"
	})

controller.$inject = ['$scope', '$state', '$ionicSlideBoxDelegate']

function controller($scope, $state, $ionicSlideBoxDelegate) {
  var vm = this

  vm.formData = {}

  vm.submittedOnce = false
  vm.submitForm = function() {
	  vm.submittedOnce = true

	  var requestData = {}
	  var { famousSeen, romCom, cry, cage } = vm.formData

	  var genreArr = []
	  for (var key in vm.formData.genre) {
	  	if (vm.formData.genre[key]) genreArr.push(key)
	  }

	  var moodArr = []
	  for (var key in vm.formData.mood) {
	  	if (vm.formData.mood[key]) moodArr.push(key)
	  }

	  requestData.famousSeen = famousSeen
	  requestData.romCom = romCom
	  requestData.cry = cry
	  requestData.cage = cage
	  requestData.moods = moodArr
	  requestData.genres = genreArr

	  console.log(requestData)
	  // TO DO - send request data off somewhere
	  vm.closeMeta()
  }

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
