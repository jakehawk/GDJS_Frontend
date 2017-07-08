
angular
	.module('app')
	.component('home', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/home/home.html"
	})

function controller() {
  var vm = this
  vm.name = 'home'
}
