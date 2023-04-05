const light_theme = $('button.button-light');
const dark_theme = $('button.button-dark');

light_theme.on('click', function(){
    $(this).fadeOut(100, function(){
        dark_theme.fadeIn(100);
    });
});

dark_theme.on('click', function(){
    $(this).fadeOut(100, function(){
        light_theme.fadeIn(100);
    });
});