
angular
  .module('app')
  .component('app', {
    bindings: {},
    controller: controller,
    templateUrl: 'components/app/app.html'
  })

function controller() {
  var vm = this

  vm.surveyOpen = false
  vm.openSurvey = function() {
    vm.surveyOpen = true
  }

  vm.meta = false
  vm.toggleMeta = function() {
    if (vm.surveyOpen) {
    	vm.meta = false
      vm.surveyOpen = false
    } else {
      vm.meta = !vm.meta
    }
  }
}