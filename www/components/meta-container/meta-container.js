
angular
  .module('app')
  .component('metaContainer', {
    bindings: {},
    controller: controller,
    templateUrl: 'components/meta-container/meta-container.html'
  })

function controller() {
  var vm = this
  vm.active = 'internal'
  vm.setActive = function(tab) {
	  vm.active = tab
	  // console.log('navigate', tab)
  }
}