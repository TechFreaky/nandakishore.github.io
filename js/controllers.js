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

    .controller("ExperienceCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Experience"

    })

    .controller("SkillsCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Skills"

        $scope.TechnicalSkills = [{
            name: 'C',
            src_url: 'c'
        },{
            name: 'C++',
            src_url: 'cpp'
        },{
            name: 'Java',
            src_url: 'java'
        },{
            name: 'Python',
            src_url: 'python'
        },{
            name: 'PHP',
            src_url: 'php'
        },{
            name: 'JavaScript',
            src_url: 'javascript'
        },{
            name: 'NODE.JS',
            src_url: 'node'
        },{
            name: 'MySQL',
            src_url: 'mysql'
        },{
            name: 'Mongo DB',
            src_url: 'mongo'
        },{
            name: 'Android',
            src_url: 'android'
        },{
            name: 'Angular JS',
            src_url: 'angular'
        },{
            name: 'Ionic',
            src_url: 'ionic'
        },{
            name: 'Java FX',
            src_url: 'javafx'
        },{
            name: 'Batch Script',
            src_url: 'batch'
        }]

    })

    .controller("AchievementsCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Achievements"

    })

    .controller("ResumeCtrl", function($scope, $rootScope){

        $rootScope.closeSideNav()

        $scope.RouteName = "Resume"

    })