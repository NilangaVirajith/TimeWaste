(function(){
    angular.module('TimeWaste',['ui.router'])
        .config($stateProvider){
            $stateProvider
                .state('signUp', {
                url: '',
                templateUrl: 'app/signup/signup.html',
                controller: 'SignUpController'
            })
    }
}());