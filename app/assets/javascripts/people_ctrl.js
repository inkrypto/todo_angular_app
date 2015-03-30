(function(){
  "use strict";
  angular.module("app").controller("peopleCtrl", function($scope){

    $scope.people=[
    {
      name: 'bob',
      details: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
    },
    {
      name: 'donna', 
      details: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    },
    {
      name: 'tim',
      details: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."
    }];
  
      $scope.toggleVisible = function(person) {
            person.detailsVisible = !person.detailsVisible;
          };

      window.scope = $scope;

});
})();
