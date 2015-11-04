function maskDir() {
    return {
        scope: {
            ngModel: '=',
            maskDir: '@'
        },
        replace: true,
        link: function(scope, element, attrs) {

            //console.log(scope.maskDir);//Debug
            if(scope.maskDir == 'money'){
                $(element).bind('keyup', function(e) {
                    var input = element.find('input');
                    var inputVal = input.val();

                    var v = scope.ngModel;
                    v=v.replace(/\D/g,'');
                    v=v.replace(/(\d{2})$/, ',$1');
                    v=v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
                    v = v != ''?v:'';

                    scope.$apply(function() {scope.ngModel = v});

                });
            }else{
                scope.$watch('maskDir', function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        $(element).mask(newValue);
                    }
                }, true);

                $(element).mask(scope.maskDir);
            }


        }
    };
    
};