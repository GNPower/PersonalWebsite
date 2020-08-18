$(function () {

    $('.project .min').click(function() {

        var content = $(this).next('.max').get(0);
        //console.log(content.css('max-height'));
        if(content.style.maxHeight){
            content.style.maxHeight = null;
            //content.style.marginTop = 0
            setTimeout(function() {
                content.style.marginTop = 0;
            }, 500);
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';            
            content.style.marginTop = '4.5rem';
        }
        
    });
});