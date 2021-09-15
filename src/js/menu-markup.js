import menu from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);

const markup = itemsTemplate(menu);
console.log(markup);

menuRef.insertAdjacentHTML('beforeend', markup);

