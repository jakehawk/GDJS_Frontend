
angular
	.module('app')
	.component('settings', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/settings/settings.html"
	})
function controller() {
  var vm = this
  vm.name = 'settings'
}
