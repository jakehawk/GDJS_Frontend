
angular
	.module('app')
	.component('internal', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/internal/internal.html"
	})
function controller() {
  var vm = this
  vm.name = 'internal'

  
}
