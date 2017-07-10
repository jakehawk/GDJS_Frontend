
angular
	.module('app')
	.component('home', {
	  bindings: {
	  	movie: '=',
	  	openBrowser: '&'
	  },
	  controller: controller,
	  templateUrl: "components/home/home.html"
	})

controller.$inject = ['MovieFactory', '$ionicLoading', '$timeout']

function controller(MovieFactory, $ionicLoading, $timeout) {
  var vm = this

}

