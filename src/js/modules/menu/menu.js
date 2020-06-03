const menu = (function menuBehavior() {
  const state = {
    isOpen: false,
  };
  const menuElement = document.querySelector('.header__menu-image');
  const headerElement = document.querySelector('.header');

  function changeMenuIconSrc() {
    const src = state.isOpen
      ? 'images/icon-hamburger.svg'
      : 'images/icon-close.svg';
    return menuElement && (menuElement.attributes.src.value = src);
  }

  function toggleClass() {
    const elementClass = state.isOpen ? 'header' : 'header header--show-menu';
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

  function initModule() {
    addClickListener();
  }

  return initModule();
})();

export default menu;
