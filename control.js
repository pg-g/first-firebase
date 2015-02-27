var app = angular.module('angFB');

app.controller('control', function($scope, service){
	// var firebaseURL = 'https://thefirsttesterapp.firebaseio.com/';
	// var ref = new Firebase(firebaseURL + 'friends');
	// var sync = $firebase(ref);
	//the above are now in the service

	var sync = service.getFriends();
	$scope.friends = sync.$asArray();

	$scope.addFriend = function(newFriend){
		newFriend.status = true;
		$scope.friends.$add(newFriend);
		$scope.newFriend = '';
	};

	$scope.makeLame = function(goober) {
		// goober.status = false;
		goober.status = !goober.status;
		$scope.friends.$save(goober).then(function(){
			console.log('Success!')
		});
	}

	$scope.removeFriend = function(goober) {
		// console.log(goober);
		$scope.friends.$remove(goober);
	}
});