import { HTML } from './constants/index';

describe('collapse.js', function() {
  document && (document.body.innerHTML = HTML);
  const collapse = require('./collapse');
  collapse.default.applyBehavior();

  it('should toggle collapse__item--show class on click', function() {
    const collapseItems = Array.from(document.getElementsByClassName('collapse__item'));
    collapseItems.map((collapseItem) => {
      expect(collapseItem.classList.contains('collapse__item--show')).toBeFalsy();
      collapseItem.click();
      expect(collapseItem.classList.contains('collapse__item--show')).toBeTruthy();
      collapseItem.click();
      expect(collapseItem.classList.contains('collapse__item--show')).toBeFalsy();
    });
  });
});