$(function(){
    // Create list item
    $('input#input_new_todo').on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            alert('Melk');
        }
    });

    // Complete task
    $('button.complete').on('click', function() {
        $(this).closest('li').addClass('completed');
    });

    // Delete list item
    $('button.delete').on('click', function() {
        $(this).closest('li').fadeOut('fast');
    });

    // Delete all completed tasks
    $('button.clear-items').on('click', function() {
        $('main.page').find('li.completed').fadeOut('fast');
    });
})