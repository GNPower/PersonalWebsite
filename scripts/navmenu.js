var nav_order = {
    'nav-home': 1,
    'nav-projects': 2,
    'nav-contact': 3,
    'nav-resume': 4
};

$(function () {   

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

    var from = 'nav-' + decodeURIComponent(window.location.search).substring(1).split('=')[1];
    if (from === 'nav-undefined'){
        from = 'nav-home';
    }
    var to = $('.active-page')[0].id;
    //Set Nav Slider
    $('.nav-slider').css({
        'width': ($('#' + from).width() + 'px'),
        'left': ($('#' + from).position().left / $('nav').width() * 100 + '%')
    });

    
    //Animate Nav Slider    
    if (nav_order[from] < nav_order[to]){
        $('.nav-slider').stop(true, true).delay(500).animate({
            'width': ($('#' + to).position().left + $('#' + to).width() - $('#' + from).position().left + 'px')
        }, 200, 'swing', function() {
            $('.nav-slider').animate({
                'left': ($('#' + to).position().left + 'px'),
                'width': ($('#' + to).width() + 'px')
            }, 200, 'swing');
        });
    } else {
        $('.nav-slider').stop(true, true).delay(500).animate({
            'left': ($('#' + to).position().left + 'px'),
            'width': ($('#' + from).position().left + $('.nav-slider').width() - $('#' + to).position().left + 'px')
        }, 200, 'swing', function(){
            $('.nav-slider').animate({
                'width': ($('#' + to).width() + 'px')
            }, 200, 'swing');
        });
    }
});

$(window).resize(function () {
    $('.nav-slider').css({
        'width': ($('.active-page').width() + 'px'),
        'left': ($('.active-page').first().position().left / $('nav').width() * 100 + '%')
    });
});