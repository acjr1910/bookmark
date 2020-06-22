import { HTML } from './constants/index';

describe('tabs.js', function () {
  document && (document.body.innerHTML = HTML);

  const tabs = require('./tabs');
  tabs.default.init();

  it('should add class to the cliked element', function () {
    const tabList = document.getElementsByClassName('tabs__item');
    const [firstTab, secondTab, thirdTab] = tabList;

    firstTab.click();
    expect(firstTab.classList.contains('tabs__item--active')).toBeTruthy();

    secondTab.click();
    expect(secondTab.classList.contains('tabs__item--active')).toBeTruthy();

    thirdTab.click();
    expect(thirdTab.classList.contains('tabs__item--active')).toBeTruthy();
  });

  it('must have only one element with class tabs__item--active', function () {
    const tabList = Array.from(document.getElementsByClassName('tabs__item'));
    expect(tabList).toBeTruthy();

    tabList.map((tab) => {
      tab.click();
      const activeTabsLength = document.getElementsByClassName(
        'tabs__item--active'
      ).length;
      expect(activeTabsLength).toBe(1);
    });
  });
});
