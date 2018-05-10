angular.module('starter.controllers', [])

    .controller("SideNav", function($rootScope){

        $rootScope.SideMenuToggle = 'none'

        $rootScope.ProjectsList = ['Versus', 'Before Leave', 'Health Bot', 'e-bills', 'RPG', 'Pradakshan', 'Notifier', 'BGM', 'Resume', 'Milinda', 'suNRIse 2k18', 'My Dairy', 'CSE-B']

        $rootScope.openSideNav = function(){
            $rootScope.SideMenuToggle = 'block'
        }

        $rootScope.closeSideNav = function(){
            $rootScope.SideMenuToggle = 'none'
        }

    })

    .controller("AboutCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "About"

    })

    .controller("ProjectsCtrl", function($scope, $rootScope, $stateParams){

        $rootScope.closeSideNav()

        $scope.ProjectId = $stateParams.ProjectId

        $scope.RouteName = "Project-"+$scope.ProjectId

        $scope.ProjectName = $rootScope.ProjectsList[$scope.ProjectId]

    })

    .controller("SkillsCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Skills"

    })

    .controller("AchievementsCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Achievements"

    })

    .controller("ResumeCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Resume"

    })