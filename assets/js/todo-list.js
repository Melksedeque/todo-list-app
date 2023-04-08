$(function(){
    // Create list item
    $('input#input_new_todo').on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            if(!$(this).val()) {
                $('main.page').find('div.error-info').fadeIn('fast');
            }
            else {
                $('main.page').find('div.error-info').fadeOut('fast');
                $('main.page section.list-todo').find('ul.list-items')
                    .append(
                        '<li class="item"><button class="complete"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path transform="translate(0, -15.674)" fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg></button><span class="title">' + $(this).val() + '</span><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button></li>'
                    );
            }
            e.currentTarget.value = "";
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
