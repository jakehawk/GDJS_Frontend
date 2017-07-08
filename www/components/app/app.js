
angular
  .module('app')
  .component('app', {
    bindings: {},
    controller: controller,
    templateUrl: 'components/app/app.html'
  })

function controller() {
  var vm = this

  vm.meta = false
  vm.toggleMeta = function() {
  	vm.meta = !vm.meta
  }
}
