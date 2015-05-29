# ngBootMaterial

For using [bootstrap-material-design](https://github.com/FezVrasta/bootstrap-material-design) with angular.

A slight modification to [ng-bootstrap-material](https://github.com/nosedive25/ng-bootstrap-material) that will let you use this more dynamically with angular.

Ran into an issue where the bootstrap-material items were being brough on dynamically through angular, this will re init them every time they are loaded on the page.

works for:

`material-input`
`material-ripple`
`material-checkbox`
`material-radio`


To use add the directive onto the material bootstrap item like so :

   `<input type="checkbox" material-checkbox-fix>`



