
app.controller('QuestionsCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside QuestionsCtrl");
    $scope.question = {};

    $scope.answerQuestion = function (){

    }

    $scope.importance = function (){
	
		console.log("$scope.question.importance: " + $scope.question.importance)
		console.log("question stance: " + $scope.question.stance);
    }
});


