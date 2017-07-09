
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
  vm.openMeta = function() {
    vm.meta = true
  }
  vm.closeMeta = function() {
    vm.meta = false
  }

  vm.startLoad = function() {
    vm.surveyOpen = false
    vm.loading = true
    $ionicLoading.show({
      template: 'Fetching movie...'
    })
  }

  vm.endLoad = function(){
    vm.loading = false
    $ionicLoading.hide()
  }

  vm.getRandom = function() {
    vm.startLoad()
    vm.movie = {}
    MovieFactory
      .getRandom()
      .then(function(response) {
        vm.movie = response.data.randomMovie
        vm.loading = false
        vm.meta = false
        $timeout(vm.endLoad(), 250)
      })
  }
  vm.getRandom()

  vm.getGenre = function(genre) {
    vm.startLoad()
    vm.movie = {}
    MovieFactory
      .getGenre(genre)
      .then(function(response) {
        vm.movie = response.data.randomMovie
        vm.loading = false
        vm.meta = false
        $timeout(vm.endLoad(), 250)
      })
  }

}

