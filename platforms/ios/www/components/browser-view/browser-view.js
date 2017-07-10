
angular
  .module('app')
  .component('browserView', {
    bindings: {
    	link: '='
    },
    controller: controller,
    templateUrl: 'components/browser-view/browser-view.html'
  })

controller.$inject = ['$sce']

function controller($sce) {
  var vm = this
  vm.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src)
  }
}
