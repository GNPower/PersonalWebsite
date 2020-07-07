$(function() {

    $('.progress-bar').each(function() {
        $(this).find('.bar .filler').css('width', this.id + '%');
    });

});