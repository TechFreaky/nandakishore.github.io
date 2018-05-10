var app = angular.module('starter', ['ui.router','starter.controllers'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller : "AboutCtrl"
    })

    .state('projects', {
        url: '/projects/:ProjectId',
        templateUrl: 'templates/projects.html',
        controller : "ProjectsCtrl"
    })

    .state('skills', {
        url: '/skills',
        templateUrl: 'templates/skills.html',
        controller : "SkillsCtrl"
    })

    .state('achievements', {
        url: '/achievements',
        templateUrl: 'templates/achievements.html',
        controller : "AchievementsCtrl"
    })

    .state('resume', {
        url: '/resume',
        templateUrl: 'templates/resume.html',
        controller : "ResumeCtrl"
    })

    $urlRouterProvider.otherwise('/about');

})