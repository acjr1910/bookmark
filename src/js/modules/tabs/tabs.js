const tabs = (function menuBehavior() {
  require('../../../images/illustration-features-tab-1.svg');

  const tabList = document.querySelectorAll('.tabs__item');

  function handleTabClick(tab) {
    if (!tab) return null;
    console.log();
    const imageSource = tab.getAttribute('data-image-src');
    const heading = tab.getAttribute('data-heading');
    const paragraph = tab.getAttribute('data-paragraph');
    console.log(imageSource, heading, paragraph);

    const imageToShow = document.querySelector('.tab-content img');
    imageToShow.setAttribute('src', imageSource);
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
