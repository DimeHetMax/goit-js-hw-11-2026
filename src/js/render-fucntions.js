// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const options = {
  animationSpeed: 250,
  fadeSpeed: 250,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
const galleryBox = new SimpleLightbox('.gallery > li > a', options);

const card = ({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `   
   <li class="item">
          <a href=${largeImageURL}>
            <img src=${webformatURL} alt=${tags} />
            <div>
              <ul class="img_text_list">
                <li><span>Likes</span> ${likes}</li>
                <li><span>Views</span> ${views}</li>
                <li><span>Comments</span> ${comments}</li>
                <li><span>Downloads</span> ${downloads}</li>
              </ul>
            </div>
          </a>
        </li>`;
};

const createGallery = array => {
  const markup = array.map(card).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  galleryBox.refresh();
};

const clearGallery = () => {
  gallery.innerHTML = '';
};
const showLoader = () => {
  loaderEl.classList.remove('visually-hidden');
};
const hideLoader = () => {
    loaderEl.classList.add("visually-hidden")
};
export { createGallery, clearGallery, showLoader, hideLoader };
