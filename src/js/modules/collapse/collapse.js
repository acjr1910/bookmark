const collapse = (function () {
  const showClass = 'collapse__item--show';
  const collapseItems = Array.from(
    document.getElementsByClassName('collapse__item')
  );

  function toggleClass(item) {
    item.classList.toggle(showClass);
  }

  function applyBehavior() {
    collapseItems.map((item) => {
      item.addEventListener('click', () => toggleClass(item));
    });
  }
  return {
    applyBehavior,
  };
})();

export default collapse;
