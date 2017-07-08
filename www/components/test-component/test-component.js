
angular
    .module('app')
    .component('testComponent', {
        bindings: {},
        controller: controller,
        templateUrl: components/test-component/test-component.html

function controller() {
  var vm = this
  vm.name = 'test-component'
}
