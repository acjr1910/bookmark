describe('menu.js', function () {
  document &&
    (document.body.innerHTML =
      '<header class="header">' +
      '<img class="header__menu-image" src="images/icon-hamburger.svg" />' +
      '</header>');

  const menu = require('./menu.js');
  menu.default.init();

  const menuElem = document.querySelector('.header__menu-image');

  it('should toggle header class on menu click', function () {
    expect(document.querySelector('.header--show-menu')).toBeNull();

    menuElem.click();
    expect(document.querySelector('.header--show-menu')).not.toBeNull();

    menuElem.click();
    expect(document.querySelector('.header--show-menu')).toBeNull();
  });

  it('should toggle menu src image src on click', function () {
    expect(menuElem).toBeDefined();

    menuElem.click();
    expect(menuElem.attributes.src.value).toBe('images/icon-close.svg');

    menuElem.click();
    expect(menuElem.attributes.src.value).toBe('images/icon-hamburger.svg');
  });
});
