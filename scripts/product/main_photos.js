let photo = document.querySelector('.photos_more');

photo.addEventListener('click', (event) => {
    if (event.target.closest(".photo_block")) {
        photo.querySelectorAll('.photo_block').forEach(el => {
            el.classList.remove('photo_block__active');
        });

        let activePhoto = event.target.closest('.photo_block');
        activePhoto.classList.add('photo_block__active');
    }
})