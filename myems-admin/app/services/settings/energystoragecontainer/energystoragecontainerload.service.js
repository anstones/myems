'use strict';
app.factory('EnergyStorageContainerLoadService', function($http) {
    return {
        getAllEnergyStorageContainerLoads: function(headers, callback) {
            $http.get(getAPI()+'energystoragecontainerloads', {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        getEnergyStorageContainerLoadsByEnergyStorageContainerID: function(id, headers, callback) {
            $http.get(getAPI()+'energystoragecontainers/'+id+'/loads', {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        addEnergyStorageContainerLoad: function(id, energystoragecontainerload, headers, callback) {
            $http.post(getAPI()+'energystoragecontainers/'+id+'/loads',{data:energystoragecontainerload}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        editEnergyStorageContainerLoad: function(id, energystoragecontainerload, headers, callback) {
            $http.put(getAPI()+'energystoragecontainers/'+id+'/loads/'+energystoragecontainerload.id,{data:energystoragecontainerload}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        deleteEnergyStorageContainerLoad: function(id, energystoragecontainerloadyID, headers, callback) {
            $http.delete(getAPI()+'energystoragecontainers/'+id+'/loads/'+energystoragecontainerloadyID, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
    };
});
