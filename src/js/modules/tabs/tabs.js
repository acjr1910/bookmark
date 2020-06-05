const tabs = (function menuBehavior() {
  require('../../../images/illustration-features-tab-1.svg');

  const tabList = document.querySelectorAll('.tabs__item');

  // @param { arrList } <NodeList>;
  // @param { classname } <string>;
  function removeTabsClass(arrList, classname) {
    if (!Array.isArray(Array.from(arrList)) || typeof classname !== 'string')
      return null;
    return arrList.forEach((elem) => elem.classList.remove(classname));
  }

  // @param { tab } <HtmlElement>;
  function addSelectedTabClass(tab) {
    return tab.classList.add('tabs__item--active');
  }

  // @param { tab } <HtmlElement>;
  function handleActiveClass(tab) {
    removeTabsClass(tabList, 'tabs__item--active');
    addSelectedTabClass(tab);
  }

  // @param { tab } <HtmlElement>;
  function handleActiveContent(tab) {
    // Current tab data
    const selectedImageSource = tab.getAttribute('data-image-src');
    const selectedHeading = tab.getAttribute('data-heading');
    const selectedParagraph = tab.getAttribute('data-paragraph');

    // Selected tab data placeholder's
    const imageToShow = document.querySelector('.tab-content img');
    const headingToShow = document.querySelector('.tab-content h2');
    const paragraphToShow = document.querySelector('.tab-content p');

    // Set selected tab content
    imageToShow.setAttribute('src', selectedImageSource);
    headingToShow.innerHTML = selectedHeading;
    paragraphToShow.innerHTML = selectedParagraph;
  }

  // @param { tab } <HtmlElement>;
  function handleTabClick(tab) {
    if (!tab) return null;
    handleActiveClass(tab);
    handleActiveContent(tab);
    return;
  }

  function addClickListener() {
    tabList.forEach((tab) => {
      tab.addEventListener('click', function () {
        handleTabClick(tab);
      });
    });
  }

  function initModule() {
    addClickListener();
  }

  return initModule();
})();

export default tabs;
