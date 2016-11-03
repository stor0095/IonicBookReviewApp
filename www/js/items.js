// Service for fetching items
angular.module('starter.items', [])
.factory('Items', function ItemsFactory($http){
    return {
        getAll: function(){
            return $http({method: 'GET', url:'data/data.json'});
        },
        getOne: function(id){
            return $http({method: 'GET', url:'data/data.json'});
        }
    }
});

//.factory('sessionService', ['$http',function($http){
//return {
//   set:function(key,value){
//      return localStorage.setItem(key,JSON.stringify(value));
//   },
//   get:function(key){
//     return JSON.parse(localStorage.getItem(key));
//   },
//   destroy:function(key){
//     return localStorage.removeItem(key);
//   },
// };
//}]);