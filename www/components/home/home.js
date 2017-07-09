
angular
	.module('app')
	.component('home', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/home/home.html"
	})

controller.$inject = ['MovieFactory', '$ionicLoading']

function controller(MovieFactory, $ionicLoading) {
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
	 	MovieFactory
	 		.getRandom()
	 		.then(function(response) {
	 			console.log(response)
			  vm.endLoad()
	 			var {title, image} = response.data.randomMovie
			  vm.loading = false
			  vm.title = title
			  vm.imageUrl = image
	 		})
  }
  vm.getRandom()


}

