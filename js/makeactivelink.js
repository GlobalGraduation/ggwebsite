jQuery(document).ready(function ($) {
    var path = window.location.pathname;
    console.log("The path is ", path);
    $('#menu li a[href = "' + path + '" ]').parent().addClass("current");
});