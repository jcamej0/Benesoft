var app = angular.module('bienestar');



app.controller('estadisticasGlobales',function($scope,$http){



    $http.get('/beneficiariosTodos').success(function(data) {

        console.log('Entre');
        $scope.totalbeneficiarios = data;
        console.log($scope.totalbeneficiarios);

    });


    $http.get('/informacion1g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarioshombres = data;

    });

    $http.get('/informacion2g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiariosmujeres = data;

    });


    $http.get('/informacion3g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios3 = data;

    });


    $http.get('/informacion4g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios4 = data;

    });



    $http.get('/informacion5g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios5 = data;

    });


    $http.get('/informacion6g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios6 = data;

    });


    $http.get('/informacion7g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios7 = data;

    });


    $http.get('/informacion8g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios8 = data;

    });


    $http.get('/informacion9g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios9 = data;

    });



    $http.get('/informacion10g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios10 = data;

    });


       $http.get('/informacion11g').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios11 = data;

    });


})



app.controller('estadisticasGlobalesComedor',function($scope,$http){




    $http.get('/informacioncomedor').success(function(data) {

        console.log('Entre');
        $scope.totalbeneficiarios = data;
        console.log($scope.totalbeneficiarios);

    });


    $http.get('/informacion1comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarioshombres = data;

    });

    $http.get('/informacion2comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiariosmujeres = data;

    });


    $http.get('/informacion3comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios3 = data;

    });


    $http.get('/informacion4comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios4 = data;

    });



    $http.get('/informacion5comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios5 = data;

    });


    $http.get('/informacion6comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios6 = data;

    });


    $http.get('/informacion7comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios7 = data;

    });


    $http.get('/informacion8comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios8 = data;

    });


    $http.get('/informacion9comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios9 = data;

    });



    $http.get('/informacion10comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios10 = data;

    });


    $http.get('/informacion11comedor').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios11 = data;

    });

    $http.get('/informaciondacacomedor', { params: { comedor: 'Daca' } }).success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiariosdaca = data;

    });

    $http.get('/informacionfederacioncomedor', { params: { comedor: 'Federación' } }).success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiariosfederacion = data;

    });



    $http.get('/informacioncamilacomedor', { params: { comedor: 'Camila' } }).success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarioscamila = data;

    });


    $http.get('/informaciondemocraciacomedor', { params: { comedor: 'Democracia' } }).success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiariosdemocracia = data;

    });



})



app.controller('estadisticasGlobalesAyudantia',function($scope, $http, $stateParams, $mdDialog, $mdToast, $window, $filter){



    $http.get('/informacionayudantia').success(function(data) {

        $scope.totalbeneficiarios = data;

    });


    $http.get('/informacion1ayudantia').success(function(data) {

        $scope.totalbeneficiarioshombres = data;

    });

    $http.get('/informacion2ayudantia').success(function(data) {

        $scope.totalbeneficiariosmujeres = data;

    });


    $http.get('/informacion3ayudantia').success(function(data) {

        $scope.totalbeneficiarios3 = data;

    });


    $http.get('/informacion4ayudantia').success(function(data) {

        $scope.totalbeneficiarios4 = data;

    });



    $http.get('/informacion5ayudantia').success(function(data) {

        $scope.totalbeneficiarios5 = data;

    });


    $http.get('/informacion6ayudantia').success(function(data) {

        $scope.totalbeneficiarios6 = data;

    });


    $http.get('/informacion7ayudantia').success(function(data) {

        $scope.totalbeneficiarios7 = data;

    });


    $http.get('/informacion8ayudantia').success(function(data) {

        $scope.totalbeneficiarios8 = data;

    });


    $http.get('/informacion9ayudantia').success(function(data) {

        $scope.totalbeneficiarios9 = data;

    });



    $http.get('/informacion10ayudantia').success(function(data) {

        $scope.totalbeneficiarios10 = data;

    });


    $http.get('/informacion11ayudantia').success(function(data) {

        $scope.totalbeneficiarios11 = data;

    });





})





app.controller('estadisticasGlobalesPreparaduria',function($scope, $http, $stateParams, $mdDialog, $mdToast, $window, $filter){



    $http.get('/informacionpreparaduria').success(function(data) {

        $scope.totalbeneficiarios = data;

    });


    $http.get('/informacion1preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarioshombres = data;

    });

    $http.get('/informacion2preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiariosmujeres = data;

    });


    $http.get('/informacion3preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios3 = data;

    });


    $http.get('/informacion4preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios4 = data;

    });



    $http.get('/informacion5preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios5 = data;

    });


    $http.get('/informacion6preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios6 = data;

    });


    $http.get('/informacion7preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios7 = data;

    });


    $http.get('/informacion8preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios8 = data;

    });


    $http.get('/informacion9preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios9 = data;

    });



    $http.get('/informacion10preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios10 = data;

    });


    $http.get('/informacion11preparaduria').success(function(data) {
        console.log('Entre');
        console.log(data);
        $scope.totalbeneficiarios11 = data;

    });





})