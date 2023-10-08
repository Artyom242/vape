let items = document.querySelector('.parameters');

items.addEventListener('click', (event) => {
    const elHeader = event.target.closest('.accordion__header');
    if (!elHeader) {
        return;
    } else {
        const elOpenItem = event.target.querySelector('.accordion__item_show');
        if (elOpenItem) {
            // и он не равен текущему, то переключим ему класс accordion__item_show
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
        }
    }
    elHeader.parentElement.classList.toggle('accordion__item_show');
})