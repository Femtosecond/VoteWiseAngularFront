app.controller('NavigatorCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside NavigatorCtrl");
});

app.controller('CrimeAndPunishmentCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside CrimeAndPunishmentCtrl");
});

app.controller('EnergyCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside EnergyCtrl");
});

app.controller('EnvironmentCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside EnvironmentCtrl");
});

app.controller('CivilLibertiesCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside CivilLibertiesCtrl");
    $scope.title = 'Civil Liberties';
	$scope.talkingPointsImage = 'img/CIVIL_LIBERTIES.svg';
	$scope.subCategories = [{'issue': "Privacy"}, {'issue': "Marriage"}, {'issue': "Racial Profiling"}, {'issue': "Voting"}, {'issue': "LGBT"}];
	for (var i = 0; i < 5; i++){
		console.log("Subissues are ... " + JSON.stringify($scope.subCategories[i]));
	}
});

app.controller('EducationCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside EducationCtrl");
});

app.controller('GunControlCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside GunControlCtrl");
});

app.controller('HealthSafetyCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside HealthSafetyCtrl");
});

app.controller('ImmigrationCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside ImmigrationCtrl");
});

app.controller('InfrastructureCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside InfrastructureCtrl");
});

app.controller('InternationalRelationsCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside InternationalRelationsCtrl");
});

app.controller('JobsEconomyCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside JobsEconomyCtrl");
});

app.controller('QualityOfLifeCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside QualityOfLifeCtrl");
});

app.controller('TaxesCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside TaxesCtrl");
});

app.controller('SocialServicesCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside SocialServicesCtrl");
});

app.controller('ReproductionCtrl', function ($scope, $rootScope, $routeParams) {
    console.log("Inside ReproductionCtrl");
});

