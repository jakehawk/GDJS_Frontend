
angular
  .module('app', ['ionic'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true)
      }
      if(window.StatusBar) {
        StatusBar.styleDefault()
      }
    })
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
      // recommendation page
      .state('home', {
        url: '/',
        templateUrl: 'router.hack.html'
      })

      // welcome survey page
      .state('survey', {
        url: '/survey',
        templateUrl: 'router.hack.html'
      })

      // settings page - very similary to survey
      .state('settings', {
        url: '/settings',
        templateUrl: 'router.hack.html'
      })

      // under the hood page - see how rec is being generated
      .state('internal', {
        url: '/internal',
        templateUrl: 'router.hack.html'
      })
      
  })
  .controller('RoutingController', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {
      this.name = "test name"

       this.state = $state
       this.stateName = $state.current.name
       console.log($state)
    }])

  
