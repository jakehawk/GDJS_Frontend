
angular
	.module('app')
	.component('home', {
	  bindings: {
	  	title: '=',
	  	image: '=',
	  	year: '='
	  },
	  controller: controller,
	  templateUrl: "components/home/home.html"
	})

controller.$inject = ['MovieFactory', '$ionicLoading', '$timeout']

function controller(MovieFactory, $ionicLoading, $timeout) {
  var vm = this

}

