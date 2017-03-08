var app = angular.module('HellApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.entradaTexto =  "";

    $scope.exibirConteudo = function(texto){
        alert(texto);
    }

    $scope.exibirNome = function(nome, sobrenome){
        alert(nome + " " + sobrenome);
    }
});