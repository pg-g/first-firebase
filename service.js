var app = angular.module('angFB');

app.service('service', function($firebase){
	var firebaseURL = 'https://thefirsttesterapp.firebaseio.com/';

	this.getFriends = function(){
		return $firebase(new Firebase(firebaseURL + 'friends'));
	};
})