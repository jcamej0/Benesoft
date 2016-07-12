app.controller('usuarioRegistro', function($scope, $http, $mdToast, $mdDialog) {


    $scope.agregarUsuario = function() {


        data = {

            nombres: $scope.formulario.nombre,
            user: $scope.formulario.usuario,
            pass: $scope.formulario.contrasena,
            tipo: $scope.formulario.tipo
        }




        $http.post('/agregarUsuario', data).success(function(respuesta) {

            if (respuesta == "registrado") {


                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Nuevo usuario Registrado.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('¡Entendido!')
                );


                 $scope.formulario = {};

            } else {




                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Error')
                    .textContent('Nombre de usuario en uso.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('¡Entendido!')
                );


            }




        });

    };

});



app.controller('operacionesBaseDatos', function($scope, $http, $mdDialog, $mdMedia) {



    $scope.eliminarxbeneficio = function(beneficio) {

        var confirm = $mdDialog.confirm()
            .title('Eliminacion de registros')
            .textContent('¿Te gustaria eliminar todos los registros de beca ' + beneficio + '?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {

            $http.delete('/eliminarxbeneficio', { params: { beneficio: beneficio } }).success(function(callback) {



                if (callback) {

                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Exito')
                        .textContent('Se han eliminado todos los registros.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Entendido!')
                    );
                }




            })


        }, function() {

        });







    }

    $scope.obtenertodo = function(beneficio) {


        var confirm = $mdDialog.confirm()
            .title('Mover registros')
            .textContent('¿Te gustaria mover todos los registros de beca ' + beneficio + ' a expediente ?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {


                $http.get('/obtenertodo', { params: { beneficio: beneficio } }).success(function(callback) {



                    if (callback) {

                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Exito')
                            .textContent('Se han movido todos los registros a los expedientes.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Entendido!')
                        );
                    }

                })
            },
            function() {

            });

    }



    $scope.restaurartodo = function(beneficio) {


        var confirm = $mdDialog.confirm()
            .title('Restaurar registros')
            .textContent('¿Te gustaria restaurar todos los registros de beca ' + beneficio + ' de expediente a activos ?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {


                $http.get('/restaurartodo', { params: { beneficio: beneficio } }).success(function(callback) {



                    if (callback) {

                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Exito')
                            .textContent('Se han activado todos los registros.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Entendido!')
                        );
                    }

                })
            },
            function() {

            });

    }



    $scope.eliminartodoexpediente = function(beneficio){

            var confirm = $mdDialog.confirm()
            .title('Eliminar expedientes')
            .textContent('¿Te gustaria eliminar todos los registros de beca ' + beneficio + ' de expediente ?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {


                $http.delete('/eliminartodoexpediente', { params: { beneficio: beneficio } }).success(function(callback) {



                    if (callback) {

                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Exito')
                            .textContent('Se han removido todos los registros.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Entendido!')
                        );
                    }

                })
            },
            function() {

            });



    }


});
