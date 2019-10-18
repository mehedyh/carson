$("[data-toggle=popover]").popover();


$(document).ready(function() {
    $("button").click(function() {
        $(".toggleClass").toggleClass("bg-light");
        $(".toggleClass").toggleClass("bg-transparent");
        $(".nav-link").toggleClass("blackC");
        $(".nav-link").toggleClass("nav-linkC");
        $(".togicon").toggleClass("hmbg");
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $('#navbar').addClass('bg-white');
            $('#navbar').removeClass('bg-transparent');
            $('.nav-link').addClass('nav-linkB');
            $('.nav-link').removeClass('nav-linkC');
            $('.togicon').addClass('hmbg');

        } else {
            $('#navbar').removeClass('bg-white ');
            $('#navbar').addClass('bg-transparent ');
            $('.nav-link').removeClass('nav-linkB');
            $('.nav-link').addClass('nav-linkC');
            $('.togicon').removeClass('hmbg');
        }
    })



});