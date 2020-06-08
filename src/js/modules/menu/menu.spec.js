import menu from './menu';

function createHeaderElement() {
  const element = document.createElement('header');
  element.setAttribute('class', 'header');
  return element;
}

function createMenuElement() {
  const element = document.createElement('img');
  element.setAttribute('class', 'header__menu-image');
  element.setAttribute('src', 'images/icon-hamburger.svg');
  return element;
}

describe('menu.js', function () {
  window.document.body.append(createMenuElement(), createHeaderElement());
  menu();

  it('should toggle header class on menu click', function () {
    const menuElement = document.querySelector('.header__menu-image');

    menuElement.click();
    expect(document.querySelector('.header').classList.value).toBe(
      'header header--show-menu'
    );

    menuElement.click();
    expect(document.querySelector('.header').classList.value).toBe('header');
  });

  it('should change menu src image src on click', function () {
    const menuElement = document.querySelector('.header__menu-image');

    menuElement.click();
    expect(menuElement.attributes.src.value).toBe('images/icon-close.svg');

    menuElement.click();
    expect(menuElement.attributes.src.value).toBe('images/icon-hamburger.svg');
  });
});
