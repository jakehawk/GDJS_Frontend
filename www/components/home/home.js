
angular
	.module('app')
	.component('home', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/home/home.html"
	})

controller.$inject = ['MovieFactory', '$ionicLoading', '$timeout']

function controller(MovieFactory, $ionicLoading, $timeout) {
  var vm = this

  vm.startLoad = function() {
  	vm.loading = true
    $ionicLoading.show({
      template: 'Loading...'
    })
  }

  vm.endLoad = function(){
  	vm.loading = false
    $ionicLoading.hide()
  }

  vm.getRandom = function() {
	  vm.startLoad()
	  vm.title = undefined
	  vm.imageUrl = undefined
	 	MovieFactory
	 		.getRandom()
	 		.then(function(response) {
	 			var {title, image} = response.data.randomMovie
			  vm.loading = false
			  vm.title = title
			  vm.imageUrl = image
			  $timeout(vm.endLoad(), 200)
	 		})
  }
  vm.getRandom()


}

