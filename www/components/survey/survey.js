
angular
	.module('app')
	.component('survey', {
	  bindings: {
	  	closeMeta: '&',
	  	startGetGenre: '&'
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
	  	console.log('formData key', key)
	  	genreArr.push(key)
	  }

	  var moodArr = []
	  for (var key in vm.formData.mood) {
	  	moodArr.push(key)
	  }

	  requestData.famousSeen = famousSeen
	  requestData.romCom = romCom
	  requestData.cry = cry
	  requestData.cage = cage
	  requestData.moods = moodArr
	  requestData.genres = genreArr

	  console.log(requestData)
	  // Just waste all this data, only use genre info

	  var genre = genreArr[Math.floor(Math.random() * genreArr.length)]
	  // console.log('genre', genre)

	  vm.startGetGenre({arg: genre})
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
