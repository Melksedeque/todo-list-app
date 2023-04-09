# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./todo-app-light-desktop.png)
![](./todo-app-light-mobile.png)
![](./todo-app-dark-desktop.png)
![](./todo-app-dark-mobile.png)


### Links

- Live Site URL: [Add live site URL here](https://melksedeque.github.io/todo-list-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Flexbox
- CSS Grid
- Sass / SCSS
- Mobile-first workflow
- jQuery 3.6.4
- [Bootstrap](https://getbootstrap.com/) - Bootstrap 5.2.3

### What I learned

With this project, I learned how to use the draggable attribute in HTML and JavaScript to reorder the task list. It was so simple to learn that I was surprised to see it working from the start.

The block of code below is what gave me headaches and frankly, I'm still stucked with no idea on how to solve it.

```js
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
  countItems();
});
```

This part should create a new item in the task list. And it does it. But the item created is not interactive. The delete task button nor the complete task button works. If anyone has any idea on how to solve it, or how to make it in a better way, please, feel free to create an issue to help me out.

### Continued development

Now I'm gonna focus on JavaScript to make this project better and create new and more complexes projects to develop myself.

### Useful resources

- [Bootstrap](https://getbootstrap.com/) - Bootstrap 5.2.3 - Used to create the CSS Grids and to use the preformatated CSS classes in the project instead of rebuild all the CSS Elements.
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Flexbox - Used to size and position the elements.

## Author

- Website - [Melksedeque Silva](https://github.com/Melksedeque/)
- Frontend Mentor - [@Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)