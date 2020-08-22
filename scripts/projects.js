$.getJSON('/injections/projects.json', function (json) {

    json.forEach(project => {
        var html = '<div class="project"><div class="min flex-col"><div class="hero-content"><h1>' + project.title + '</h1></div></div><div class="max flex-col"><p class="border-fade">' + project.paragraph + '</p><div class="gallery">';

        project.gallery.forEach(image => {
            html = html + '<div class="img"><img src="' + image + '" alt=""></div>';
        });
                
        html = html + '</div><div class="links"><h3 class="">Project Files</h3>';

        project.links.forEach(link => {
            html = html + '<div class="link"><div class="image"><img src="' + link.icon + '" alt="Project File"></div><div class="name"><h3>' + link.title + '</h3></div></div>';
        });
            
        html = html + '</div></div></div>';

        $('.projects-container').append(html);
    });

    makeExtendable();
});

function makeExtendable() {

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
}