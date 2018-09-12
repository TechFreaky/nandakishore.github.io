angular.module('starter.controllers', [])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    setTimeout(function () {
      navigator.splashscreen.hide();
    }, 100);
  });
})





.controller('SkillsCtrl', function($scope) {

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



.controller('AcheivementsCtrl', function($scope) {})



.controller('AboutMeCtrl', function($scope) {})



.controller('ExperienceCtrl', function($scope) {})



.controller('ProjectsCtrl', function($scope, $ionicModal, $sce, $timeout) {

    $scope.ProjectsList = [{
        name: 'Versus',
        motto: 'Enthusiasm for programming of a young and novice programmer lead to the development of Versus.',
        technology: 'Batch Script',
        video_src: 'https://www.youtube.com/watch?v=wsFHoL0DKcI',
        asset_src: [],
        developer: 'Nanda Kishore'
    },{
        name: 'Before Leave',
        motto: 'Minimizing the time to apply for leaves and adjusting workload efficiently (for the faculty of my college, NRI IT).',
        technology: 'Java Swings',
        video_src: 'https://www.youtube.com/watch?v=p5EBHFYwP9c',
        asset_src: [
            {name: '64Bit',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/BeforeLeave.exe'},
            {name: '32Bit',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/BeforeLeave_32bit.exe'}
        ],
        developer: 'Krishna Sastry, Nanda Kishore'
    },{
        name: 'Health Bot',
        motto: 'Providing information about the disease from which user suffering based on the symptoms user provide and booking an appointment with a doctor near to user\'s location using a chat bot.',
        technology: 'Kore.ai, Node.Js, Ionic, MongoDB, Twilio, IBM Cloud',
        video_src: 'https://www.youtube.com/watch?v=oa49JSRHc6Y',
        asset_src: [],
        developer: 'Nanda Kishore, Sainath, Ram Kumari, Janaki, Pavani'
    },{
        name: 'e-bills',
        motto: 'Easy billing system compatible with present GST Tax System for Hindustan Candle Industries.',
        technology: 'Ionic',
        video_src: 'https://www.youtube.com/watch?v=HHUX0uGX3Ns',
        asset_src: [],
        developer: 'Nanda Kishore'
    },{
        name: 'RPG',
        motto: 'Efficient fee payment system for Rehman Park Gym coach (My Dad).',
        technology: 'Ionic',
        video_src: 'https://www.youtube.com/watch?v=4TsEHKOGKRA',
        asset_src: [],
        developer: 'Nanda Kishore'
    },{
        name: 'Pradakshan',
        motto: 'Easy and portable way to count number of pradakshans made by a devotee.',
        technology: 'Ionic',
        video_src: 'https://www.youtube.com/watch?v=NNDnCeATyDw',
        asset_src: [
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/Pradakshan.apk'}
        ],
        developer: 'Nanda Kishore'
    },{
        name: 'Notifier',
        motto: 'Schedule maker with good visualization.',
        technology: 'Ionic',
        video_src: 'https://www.youtube.com/watch?v=bMR2PJ_np2M',
        asset_src: [
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/Notifier.apk'}
        ],
        developer: 'Nanda Kishore'
    },{
        name: 'BGM',
        motto: 'Everyone deserves Background Music in their lives!',
        technology: 'Ionic, Node.Js',
        video_src: 'https://www.youtube.com/watch?v=i0I6xIXuNNY',
        asset_src: [
            {name: 'zip',src: 'https://github.com/TechFreaky/Assets/files/2019043/BGM.zip'},
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/BGM.apk'}
        ],
        developer: 'Nanda Kishore'
    },{
        name: 'Resume',
        motto: 'My resume as a mobile application.',
        technology: 'Ionic',
        video_src: 'https://www.youtube.com/watch?v=Nvm9fne3ZBA',
        asset_src: [
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/Resume.apk'}
        ],
        developer: 'Nanda Kishore'
    },{
        name: 'Milinda',
        motto: 'Managing payments, labour attendance, work progress happening at \'Milinda InfraCon Pvt Ltd\' construction sites.',
        technology: 'Ionic, PHP, MySQL',
        video_src: 'https://www.youtube.com/watch?v=3VyBaSrLFFA',
        asset_src: [],
        developer: 'Nanda Kishore'
    },{
        name: 'suNRIse 2k18',
        motto: 'Registering participants for \'suNRIse 2k18\' using QR code.',
        technology: 'Ionic, PHP',
        video_src: 'https://www.youtube.com/watch?v=NJXrTntPRZc',
        asset_src: [
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/suNRIse.apk'}
        ],
        developer: 'Nanda Kishore'
    },{
        name: 'My Dairy',
        motto: 'Simple and efficient dairy application.',
        technology: 'Ionic',
        video_src: 'https://www.youtube.com/watch?v=YUkfWIz1n-U',
        asset_src: [
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/MyDairy.apk'}
        ],
        developer: 'Nanda Kishore'
    },{
        name: 'CSE-B',
        motto: 'Slam book for my classmates (CSE-B, NRI IT, 2014-18 batch).',
        technology: 'Ionic, PHP, MySQL',
        video_src: 'https://www.youtube.com/watch?v=SC9EmMnzOJI',
        asset_src: [
            {name: 'apk',src: 'https://github.com/TechFreaky/Assets/releases/download/1.0/CSE-B.apk'}
        ],
        developer: 'Nanda Kishore'
    }]




    $scope.openProject = function(project){

        $ionicModal.fromTemplateUrl('templates/openProject.html', {

            scope: $scope,
            animation: 'slide-in-up'
            }).then(function (modal) {

            $scope.modal = modal
            $scope.modal.show()

            $scope.ProjectDetails = project

        })

    }





    $scope.cancelModal = function () {
        $scope.modal.hide();
    }

    $scope.$on('$destroy', function () {
        if ($scope.modal) {
            $scope.modal.remove();
        }
    })


})