import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(element) {
  const markup = element
    .map(({ preview, original, description }) => {
      return /*html*/ `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>`;
    })
    .join('');

  galleryBox.insertAdjacentHTML('beforeend', markup);
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
