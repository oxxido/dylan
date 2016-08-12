// create angular controller
app.controller('mainController', function($scope, $http) {
    $scope.step = 1;
    $scope.formData = {};
    $scope.checkForm = function() {

        switch($scope.step) {
            case 1: 
                
                return $scope.contact.name.$invalid?true:false;
                break;
            case 2:
                return $scope.contact.email.$invalid;
                break;
            case 3:
                //console.log($scope.formData.message);
                return $scope.contact.message.$invalid;
                break;
            default:
                return true;
        }
    }
    $scope.nextStep = function(backwards) {
        if( backwards ){
            $scope.step =$scope.step-1;
        }
        else {
            $scope.step++;
        }
        return false;
    }
    $scope.resetForm = function() {
        $scope.step = 1;
        $scope.formData.name = "";
        $scope.formData.email = "";
        $scope.formData.message = "";
        $scope.contact.$setPristine();
    }
    // function to submit the form after all validation has occurred            
    $scope.submitForm = function() {
        $http({
          method: 'POST',
          url: 'http://requestb.in/1fv195j1',
          data: {'name':$scope.formData.name, 'email':$scope.formData.email, 'message':$scope.formData.message},
          headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        });
        $scope.step = 5;

    };


});