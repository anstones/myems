'use strict';
app.factory('EnergyStorageContainerGridService', function($http) {
    return {
        getAllEnergyStorageContainerGrids: function(headers, callback) {
            $http.get(getAPI()+'energystoragecontainergrids', {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        getEnergyStorageContainerGridsByEnergyStorageContainerID: function(id, headers, callback) {
            $http.get(getAPI()+'energystoragecontainers/'+id+'/grids', {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        addEnergyStorageContainerGrid: function(id, energystoragecontainergrid, headers, callback) {
            $http.post(getAPI()+'energystoragecontainers/'+id+'/grids',{data:energystoragecontainergrid}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        editEnergyStorageContainerGrid: function(id, energystoragecontainergrid, headers, callback) {
            $http.put(getAPI()+'energystoragecontainers/'+id+'/grids/'+energystoragecontainergrid.id,{data:energystoragecontainergrid}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        deleteEnergyStorageContainerGrid: function(id, energystoragecontainergridyID, headers, callback) {
            $http.delete(getAPI()+'energystoragecontainers/'+id+'/grids/'+energystoragecontainergridyID, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
    };
});
