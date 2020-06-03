const menu = (function menuBehavior() {
  const state = {
    isOpen: false,
  };
  const menuElement = document.querySelector('.header__menu-image');
  const menuNavElement = document.querySelector('.header__menu-nav');

  function toggleClass() {
    const elementClass = state.isOpen
      ? 'header__menu-nav--show'
      : 'header__menu-nav';
    return menuNavElement && (menuNavElement.classList.value = elementClass);
  }

  function toggleIsOpen() {
    Object.assign({}, state, (state.isOpen = !state.isOpen));
    return toggleClass();
  }

  function addClickListener() {
    return menuElement && menuElement.addEventListener('click', toggleIsOpen);
  }

  function initModule() {
    addClickListener();
  }

  return initModule();
})();

export default menu;
