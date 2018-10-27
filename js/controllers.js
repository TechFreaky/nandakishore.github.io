angular.module('starter.controllers', [])

    .controller("SideNav", function($rootScope){

        $rootScope.SideMenuToggle = 'none'

        $rootScope.ProjectsList = [{
            name: 'Before Leave',
            motto: 'Minimizing the time to apply for leaves and adjusting workload efficiently (for the faculty of my college, NRI IT).',
            technology: 'Java Swings',
            video_src: 'https://www.youtube.com/embed/p5EBHFYwP9c',
            asset_src: [
                {name: '64Bit',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/BeforeLeave.exe'},
                {name: '32Bit',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/BeforeLeave_32bit.exe'}
            ],
            developer: 'Krishna Sastry, Nanda Kishore'
        },{
            name: 'Health Bot',
            motto: 'Providing information about the disease from which user suffering based on the symptoms user provide and booking an appointment with a doctor near to user\'s location using a chat bot.',
            technology: 'Kore.ai, Node.Js, Ionic, MongoDB, Twilio, IBM Cloud',
            video_src: 'https://www.youtube.com/embed/oa49JSRHc6Y',
            asset_src: [],
            developer: 'Nanda Kishore, Sainath, Ram Kumari, Janaki, Pavani'
        },{
            name: 'Milinda',
            motto: 'Managing payments, labour attendance, work progress happening at \'Milinda InfraCon Pvt Ltd\' construction sites.',
            technology: 'Ionic, PHP, MySQL',
            video_src: 'https://www.youtube.com/embed/3VyBaSrLFFA',
            asset_src: [],
            developer: 'Nanda Kishore'
        },{
            name: 'OffersNearBy',
            motto: 'Two custom made mobile applications for OffersNearBy Pvt. Ltd.',
            technology: 'Ionic, Android, Xcode, PHP',
            video_src: '',
            asset_src: [],
            developer: 'Nanda Kishore'
        }]

        $rootScope.MiniProjectsList = [{
            name: 'Versus',
            motto: 'Enthusiasm for programming of a young and novice programmer lead to the development of Versus.',
            technology: 'Batch Script',
            video_src: 'https://www.youtube.com/embed/wsFHoL0DKcI',
            asset_src: [],
            developer: 'Nanda Kishore'
        },{
            name: 'e-bills',
            motto: 'Easy billing system compatible with present GST Tax System for Hindustan Candle Industries.',
            technology: 'Ionic',
            video_src: 'https://www.youtube.com/embed/HHUX0uGX3Ns',
            asset_src: [],
            developer: 'Nanda Kishore'
        },{
            name: 'RPG',
            motto: 'Efficient fee payment system for Rehman Park Gym coach (My Dad).',
            technology: 'Ionic',
            video_src: 'https://www.youtube.com/embed/4TsEHKOGKRA',
            asset_src: [],
            developer: 'Nanda Kishore'
        },{
            name: 'Pradakshan',
            motto: 'Easy and portable way to count number of pradakshans made by a devotee.',
            technology: 'Ionic',
            video_src: 'https://www.youtube.com/embed/NNDnCeATyDw',
            asset_src: [
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/Pradakshan.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'Notifier',
            motto: 'Schedule maker with good visualization.',
            technology: 'Ionic',
            video_src: 'https://www.youtube.com/embed/bMR2PJ_np2M',
            asset_src: [
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/Notifier.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'BGM',
            motto: 'Everyone deserves Background Music in their lives!',
            technology: 'Ionic, Node.Js',
            video_src: 'https://www.youtube.com/embed/i0I6xIXuNNY',
            asset_src: [
                {name: 'zip',src: 'https://github.com/TechFreaky/Assets/files/2019043/BGM.zip'},
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/BGM.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'Resume',
            motto: 'My resume as a mobile application.',
            technology: 'Ionic',
            video_src: 'https://www.youtube.com/embed/Nvm9fne3ZBA',
            asset_src: [
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/Resume.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'suNRIse 2k18',
            motto: 'Registering participants for \'suNRIse 2k18\' using QR code.',
            technology: 'Ionic, PHP',
            video_src: 'https://www.youtube.com/embed/NJXrTntPRZc',
            asset_src: [
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/suNRIse.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'My Dairy',
            motto: 'Simple and efficient dairy application.',
            technology: 'Ionic',
            video_src: 'https://www.youtube.com/embed/YUkfWIz1n-U',
            asset_src: [
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/MyDairy.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'CSE-B',
            motto: 'Slam book for my classmates (CSE-B, NRI IT, 2014-18 batch).',
            technology: 'Ionic, PHP, MySQL',
            video_src: 'https://www.youtube.com/embed/SC9EmMnzOJI',
            asset_src: [
                {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/CSE-B.apk'}
            ],
            developer: 'Nanda Kishore'
        },{
            name: 'Confidential',
            motto: 'Android application for document vault with multi-level security.',
            technology: 'Ionic',
            video_src: '',
            asset_src: [],
            developer: 'Nanda Kishore'
        }]

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

    .controller("ProjectsCtrl", function($scope, $rootScope, $stateParams, $sce, $timeout){

        $rootScope.closeSideNav()

        $scope.ProjectId = $stateParams.ProjectId

        $scope.RouteName = "Project-"+$scope.ProjectId+": "+$rootScope.ProjectsList[$scope.ProjectId].name

        $scope.Project = $rootScope.ProjectsList[$scope.ProjectId]

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

        $scope.hideForaSec = function(){

            $timeout(function() {
                $scope.hiding = true
            },500)

        }

    })

    .controller("MiniProjectsCtrl", function($scope, $rootScope, $stateParams, $sce, $timeout){

        $rootScope.closeSideNav()

        $scope.ProjectId = $stateParams.ProjectId

        $scope.RouteName = "Project-"+$scope.ProjectId+": "+$rootScope.MiniProjectsList[$scope.ProjectId].name

        $scope.Project = $rootScope.MiniProjectsList[$scope.ProjectId]

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

        $scope.hideForaSec = function(){

            $timeout(function() {
                $scope.hiding = true
            },500)

        }

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
        },{
            name: 'Kore.ai',
            src_url: 'kore'
        },{
            name: 'IBM Watson',
            src_url: 'IBM'
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