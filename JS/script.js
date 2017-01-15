var sites = [
    'encourageone.html',
    'encouragetwo.html',
    'encouragethree.html',
    'encouragefour.html'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}

var moreSites = [
    'affirmone.html',
    'affirmtwo.html',
    'affirmthree.html',
    'affirmfour.html'
];

function openSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = moreSites[i];
}

var evenMoreSites = [
    'worldone.html',
    'worldtwo.html',
    'worldthree.html',
    'worldfour.html'
];

function newSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = evenMoreSites[i];
}

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
