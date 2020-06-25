$(function () {

    function changeContent($uri){
        var $parent = $('main');
        $.ajax({
            url:$uri,
            type:'get',
            success:function($content){
                $parent.html($content);
            },
            error:function(err){
                //Handle errors like 404, etc from here
            }
        });
    }

    $('.nav-item').click(function(){
         changeContent($(this).attr('uri'))
    });
    
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