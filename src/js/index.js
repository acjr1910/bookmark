require('../images/icon-close.svg');
require('../images/illustration-features-tab-2.svg');
require('../images/illustration-features-tab-3.svg');

import menu from './modules/menu/menu';
import tabs from './modules/tabs/tabs';

import styles from '../styles/index.scss';

window.addEventListener('DOMContentLoaded', function (e) {
  menu();
  tabs();
});
