import menu from './menu';

const HeaderElement = (function () {
  const element = document.createElement('header');
  element.setAttribute('class', 'header');
  return element;
})();

const MenuElement = (function () {
  const element = document.createElement('img');
  element.setAttribute('class', 'header__menu-image');
  element.setAttribute('src', 'images/icon-hamburger.svg');
  return element;
})();

describe('menu.js', function () {
  window.document.body.append(HeaderElement);
  document.querySelector('.header').append(MenuElement);
  const menuElement = document.querySelector('.header__menu-image');

  menu.init();

  it('should toggle header class on menu click', function () {
    expect(document.querySelector('.header--show-menu')).toBeNull();

    menuElement.click();
    expect(document.querySelector('.header--show-menu')).toBeDefined();

    menuElement.click();
    expect(document.querySelector('.header--show-menu')).toBeNull();
  });

  it('should toggle menu src image src on click', function () {
    expect(menuElement).toBeDefined();

    menuElement.click();
    expect(menuElement.attributes.src.value).toBe('images/icon-close.svg');

    menuElement.click();
    expect(menuElement.attributes.src.value).toBe('images/icon-hamburger.svg');
  });
});
