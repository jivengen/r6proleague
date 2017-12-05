(function(){
    
    angular.module('rainbow6App', ['ngRoute', 'ngSanitize', 'uibootstrap']);
    
    function config($routeProvider){
        console.log("r6 servces APp - mean stack driven");
        
        $routeProvider
        .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
        
    }
    
    angular
    .module('rainbow6App')
    .config(['$routeProvider', config])
})