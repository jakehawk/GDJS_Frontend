
angular
  .module('app')
  .component('browserView', {
    bindings: {
    	link: '='
    },
    controller: controller,
    templateUrl: 'components/browser-view/browser-view.html'
  })

controller.$inject = ['$sce', '$element', '$scope']

function controller($sce, $element, $scope) {
  var vm = this
  // DEV - this is a super hack to get links to always open in the parent frame
// angular.element($element).find('head')[0].ready('<base target="_parent">')
// angular.element(angular.element(angular.element(angular.element($element).children()[0]).children()[0]).children()[.onload(function() {
	// angular.element(this).find('head').append('<base target="_parent">')
	// console.log('ready', angular.element(angular.element(angular.element(angular.element($element).children()[0]).children()[0]).children()[0]).children()[0].contentDocument.head)
// })
  // console.log(angular.element(angular.element(angular.element($element).children()[0]).children()[0]).children()[0])

  // angular.element('body', window.frames[0].document).append('<base target="_parent">');

  vm.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src)
  }
}
