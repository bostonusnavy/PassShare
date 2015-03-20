angular.module('app').value('psToastr', toastr);

angular.module('app').factory('psNotifier', function (psToastr) {
    return {
        notify: function(msg){
            psToastr.success(msg);
            console.log(msg);
        }
    }
});