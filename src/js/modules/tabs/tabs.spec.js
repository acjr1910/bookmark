describe('tabs.js', function () {
  document &&
    (document.body.innerHTML = `<ul class="tabs">
            <li class="tabs__item tabs__item--active" data-image-src="images/illustration-features-tab-1.svg" data-heading="Bookmark in one click" data-paragraph="Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.">
              Simple Bookmarking
            </li>
            <li class="tabs__item" data-image-src="images/illustration-features-tab-2.svg" data-heading="Intelligent search" data-paragraph="Our powerful search feature will help you find saved sites in no time at all. 
              No need to trawl through all of your bookmarks.">
              Speedy Searching
            </li>
            <li class="tabs__item" data-image-src="images/illustration-features-tab-3.svg" data-heading=" Share your bookmarks" data-paragraph="Easily share your bookmarks and collections with others. Create a shareable 
              link that you can send at the click of a button.">
              Easy Sharing
            </li>
          </ul>`);

  const tabs = require('./tabs');
  tabs.default.init();

  it('should remove class from not clicked element', function () {});
  it('should add class to the cliked element', function () {});
  it('must have only one element with class tabs__item--active', function () {});
});
