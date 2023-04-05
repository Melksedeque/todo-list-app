const page = $('main.page');
const light_theme = $('button.button-light');
const dark_theme = $('button.button-dark');

light_theme.on('click', function(){
    $(this).fadeOut(100, function(){
        dark_theme.fadeIn(100);
    });
    page.removeClass('light-theme').addClass('dark-theme');
});

dark_theme.on('click', function(){
    $(this).fadeOut(100, function(){
        light_theme.fadeIn(100);
    });
    page.removeClass('dark-theme').addClass('light-theme');
});