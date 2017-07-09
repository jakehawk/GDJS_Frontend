
angular
	.module('app')
	.component('home', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/home/home.html"
	})

function controller() {
  var vm = this
  vm.title = 'Almost Famous'
  vm.info = 'Starring Kate Hudson'
  vm.imageUrl = 'https://d19p213wjrwt85.cloudfront.net/uvvu-images/0941ADA74230B31EE05316345B0AA37F'
}
