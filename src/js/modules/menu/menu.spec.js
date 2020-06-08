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
  it('should toggle menu on click', function () {
    window.document.body.append(createMenuElement(), createHeaderElement());

    menu();

    const menuElement = document.querySelector('.header__menu-image');

    menuElement.click();
    expect(document.querySelector('.header').classList.value).toBe(
      'header header--show-menu'
    );

    menuElement.click();
    expect(document.querySelector('.header').classList.value).toBe('header');
  });
});
