$(function () {

    $('.project .min').click(function() {

        var content = $(this).next('.max').get(0);
        //console.log(content.css('max-height'));
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        
    });
});