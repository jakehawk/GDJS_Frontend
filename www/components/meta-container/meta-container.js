
angular
  .module('app')
  .component('metaContainer', {
    bindings: {},
    controller: controller,
    templateUrl: 'components/meta-container/meta-container.html'
  })

function controller() {
  var vm = this
  vm.name = 'meta-container'
}
