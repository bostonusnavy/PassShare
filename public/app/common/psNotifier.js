angular.module('app').value('psToastr', toastr);

angular.module('app').factory('psNotifier', function (psToastr) {
    return {
        notify: function(msg){
            psToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            psToastr.error(msg);
            console.log(msg);
        }
    }
});