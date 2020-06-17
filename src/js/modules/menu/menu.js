const menu = (function menuBehavior() {
  const state = {
    isOpen: false,
  };
  const menuElement = document.querySelector('.header__menu-image');
  const headerElement = document.querySelector('.header');

  function changeMenuIconSrc() {
    const src = state.isOpen
      ? 'images/icon-close.svg'
      : 'images/icon-hamburger.svg';
    return menuElement && (menuElement.attributes.src.value = src);
  }

  function toggleClass() {
    const elementClass = state.isOpen ? 'header header--show-menu' : 'header';
    return headerElement && (headerElement.classList.value = elementClass);
  }

  function toggleIsOpen() {
    Object.assign({}, state, (state.isOpen = !state.isOpen));
    changeMenuIconSrc();
    toggleClass();
    return;
  }

  function addClickListener() {
    return menuElement && menuElement.addEventListener('click', toggleIsOpen);
  }

  function init() {
    addClickListener();
  }

  return {
    init,
  };
})();

export default menu;
