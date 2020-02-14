app.controller("main-controller", function($scope) {
    $scope.array_of_planets = ["./images/earth.png", "./images/mars.png"];
});

app.controller("possible-controller", function($scope) {
    $scope.terraform_src = "./images/terraform.jpeg";
});

app.controller("impossible-controller", function($scope) {
    $scope.mars_mass_src = "./images/mars_mass.jpg";
});