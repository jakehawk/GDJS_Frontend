
angular
	.module('app')
	.component('survey', {
	  bindings: {},
	  controller: controller,
	  templateUrl: "components/survey/survey.html"
	})
function controller() {
  var vm = this
  vm.name = 'survey'
}
