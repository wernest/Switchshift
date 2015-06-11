angular.module('shiftsapp.navlist', [
    'ngResource',
    'ui.bootstrap',
    'ngMaterial',
    'shiftsapp.components.auth',
    'shiftsapp.components.groupResource',
    'shiftsapp.groupBrowser',
    'shiftsapp.groupBrowser.service',
    'shiftsapp.group'
])

    .controller('NavListCtrl', ['$scope', '$window', '$mdDialog', 'Auth', 'GroupResource', 'GroupBrowserService',
    function ($scope, $window, $mdDialog, auth, groupResource, groupBrowseService) {
        var self = this;

        self.selected = null;
        self.actions = [{
            name: "My Shifts",
            icon: "/assets/material-design-icons/action/svg/production/ic_account_circle_24px.svg"
        }, {
            name: "Available Shifts",
            icon: "/assets/material-design-icons/action/svg/production/ic_list_24px.svg"
        }, {
            name: "Groups",
            icon: "/assets/material-design-icons/social/svg/production/ic_group_24px.svg"
        },
            {
            name: "Sign Out",
            icon: "/assets/material-design-icons/navigation/svg/production/ic_more_horiz_24px.svg"
        }];
        self.selectAction = selectAction;
        self.launchProfile = launchProfile;
        self.classIfActive = classIfActive;
        self.groups = null;
        self.contentView = self.actions[0].name;


        function selectAction(selectedAction) {
            self.selected = angular.isNumber(selectedAction) ? $scope.actions[selectedAction].name : selectedAction;

            if(self.selected === "Sign Out") { logOut(); return;}

            if(self.selected === "Groups") {
                if(self.groups == null) {
                    self.groups = groupResource.mine();
                }else {
                    self.groups = null;
                }
                return;
            }
            self.contentView = self.selected;
        }

        function logOut() {
            auth.logout()
                .then(function(){
                    $window.location.href="/";
                });
        }

        function launchProfile(){
            $mdDialog.show({
                templateUrl: '/assets/angular/user/profile/profile.html',
                controller: 'ProfileCtrl'
            });
        }

        function classIfActive (active, cssClass) {
            return self.contentView === active ? cssClass : '';
        }

         $scope.selectGroup = function (group){
             groupBrowseService.updateTheGroup(group);
             self.contentView = self.actions[2].name;
        };

        $scope.launchGroupForm = function(providedGroup){
            $mdDialog.show({
                templateUrl: '/assets/angular/addgroup/addgroup-template.html',
                controller: 'GroupController',
                locals: {
                    providedGroup: providedGroup
                }
            })
                .then(function(response){

                if(response == "delete"){
                    self.groups = groupResource.mine();
                } else {
                    if(providedGroup.id){
                        angular.extend(response, providedGroup);
                    } else {
                        self.groups.push(response);
                    }
                }
            });
        }

    }
]);