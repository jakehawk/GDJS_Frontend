
angular
  .module('app')
  .component('app', {
    bindings: {},
    controller: controller,
    templateUrl: 'components/app/app.html'
  })

controller.$inject = ['MovieFactory', '$ionicLoading', '$timeout']

function controller(MovieFactory, $ionicLoading, $timeout) {
  var vm = this

  vm.surveyOpen = false
  vm.openSurvey = function() {
    vm.surveyOpen = true
  }

  vm.meta = false
  vm.toggleMeta = function() {
    vm.meta = !vm.meta
  }
  vm.closeMeta = function() {
    vm.meta = false
  }

  vm.startLoad = function() {
    vm.loading = true
    $ionicLoading.show({
      template: 'Loading...'
    })
  }

  vm.endLoad = function(){
    vm.loading = false
    $ionicLoading.hide()
  }

  vm.getRandom = function() {
    vm.startLoad()
    vm.title = undefined
    vm.image = undefined
    vm.year = undefined
    MovieFactory
      .getRandom()
      .then(function(response) {
        var {title, image, year} = response.data.randomMovie
        vm.loading = false
        vm.title = title
        vm.image = image
        vm.year = year
        $timeout(vm.endLoad(), 200)
        vm.meta = false
      })
  }
  vm.getRandom()

}

