import { navigationList, navigationItems, catalogTitle } from './elements.js';

export const navigationListController = (cb) => {
    navigationList.addEventListener('click', (e) => {
        const category = e.target.closest('.navigation__button');

        if (!category) return;

        navigationItems.forEach(item => {
            if (item === category) {
                item.classList.add('navigation__button_active');
                catalogTitle.textContent = item.textContent;
                cb(item.dataset.category);
            } else {
                item.classList.remove('navigation__button_active');
            }
        });
    });
};