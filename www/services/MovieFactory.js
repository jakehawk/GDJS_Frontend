
angular
	.module('app')
	.factory('MovieFactory', MovieFactory)

MovieFactory.$inject = ['$http']

function MovieFactory($http) {

	return {
		getRandom: getRandom,
		getGenre: getGenre
	}

	function getRandom() {
		return $http.get('http://gdjs-atthack.herokuapp.com/movie/random')
	}

	function getGenre(genre) {
		var genreLookup = {
			'drama': 'Drama',
			'comedy': 'Comedy',
			'horror': 'Horror',
			'action': 'Action%20&%20Adventure',
			'romance': 'Romance',
			'animation': 'Animation',
			'science': 'Sci-Fi%20&%20Fantasy',
		}

		console.log('genre', genre)
		console.log('lookup', genreLookup[genre])

		if (!genreLookup[genre]) return getRandom()

		return $http.get('http://gdjs-atthack.herokuapp.com/' + genreLookup[genre])
	}
}