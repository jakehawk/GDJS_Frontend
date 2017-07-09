
angular
	.module('app')
	.factory('MovieFactory', MovieFactory)

MovieFactory.$inject = ['$http']

function MovieFactory($http) {

	return {
		getRandom: getRandom
	}

	function getRandom() {
		return $http.get('http://gdjs-atthack.herokuapp.com/movie/random')
	}
}