$(function () {
    
    $('#nav-menu').load('navmenu.html');    

    var page = document.location.pathname.match(/[^\/]+$/)[0];
    console.log(page);

    $('#nav-home').addClass('active-page');

    if (page == 'index.html' || page == 'home.html'){

    } else if (page == 'projects.html') {
        
    } else if (page == 'contact.html') {

    } else if (page == 'resume.html') {

    }

    $('.mobile').click(function () {
        //Toggle nav
        $('.nav-links').toggleClass('nav-active');

        //Animate links
        $('.nav-links li').each(function (index, link) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Animate Nav
        $('.mobile').toggleClass('toggle-mobile-nav');
    });  

    $('.nav-slider').css({
        'width': ($('.active-page').width() + 'px'),
        'left': ($('.active-page').first().position().left / $('nav').width() * 100 + '%')
    });
});

$(window).resize(function () {
    $('.nav-slider').css({
        'width': ($('.active-page').width() + 'px'),
        'left': ($('.active-page').first().position().left / $('nav').width() * 100 + '%')
    });
});

function moveNavSlider(){
    console.log('moving...');
}