$.getJSON('injections/index.json', function(json) {    

    //Inserting About Me html Into index.html
    $('.about').append('<p class="above-shadow">' + json.about_me + '</p>');

    //Inserting Projects html Into index.html
    $('.projects .section-header').append('<p class="above-shadow">' + json.projects.intro + '</p>');

    json.projects.projects.forEach(project => {
        $('.project-row').append('<div class="project-col"><div class="project-tile" onclick="location.href = \'https:\/\/www.google.com\';"><div class="flex-row"><img class="logo" src="' + project.icon + '" alt="Project Logo"><h1>' + project.title + '</h1></div><img class="hero" src="' + project.hero_img + '" alt="Hero Image"><p>' + project.paragraph + '</p></div></div>');
    });

    //Inserting Skills html Into index.html
    json.skills.skills.forEach(skill => {
        $('.skill-row').append('<div class="skill-col"><div class="skill-tile"><div class="flex-row"><h1>' + skill.title + '</h1></div><img class="hero" src="' + skill.icon + '" alt="Hero Image"><div class="progress-bar" id="' + skill.ability_num + '"><div class="bar"><div class="filler"></div></div><p>' + skill.ability_name + '</p></div><p>' + skill.paragraph + '</p></div></div>');
    });

    $('.skills .section-header').append('<p class="above-shadow">' + json.skills.intro + '</p>');

    $('.progress-bar').each(function() {
        $(this).find('.bar .filler').css('width', this.id + '%');
    });
});