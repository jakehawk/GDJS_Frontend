
angular
  .module('app')
  .component('metaContainer', {
    bindings: {
      closeMeta: '&',
      getGenre: '&'
    },
    controller: controller,
    templateUrl: 'components/meta-container/meta-container.html'
  })

function controller() {
  var vm = this
  vm.active = 'survey'
  vm.setActive = function(tab) {
	  vm.active = tab
	  // console.log('navigate', tab)
  }

  vm.continueGetGenre = function(arg) {
    // console.log('arg', arg)
    vm.getGenre({arg: arg})
  }
}
