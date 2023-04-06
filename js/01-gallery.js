import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector('.gallery');

(function () {
    const markUp = galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
    galleryBox.insertAdjacentHTML('beforeend', markUp);
})()

galleryBox.addEventListener('click', getPreview)

function getPreview(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
    onShow: () => 
        window.addEventListener('keydown', onEscKeyPress),
    onClose: () => 
        window.removeEventListener('keydown', onEscKeyPress),  
}
)
function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = ESC_KEY_CODE;
    if (isEscKey) {
    instance.close();
    }
}
instance.show();
}
console.log(galleryItems);
