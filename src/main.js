import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-fucntions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  transitionIn: 'flipInX',
  maxWidth: '400px',
  position: 'topRight',
  transitionOut: 'flipOutX',
  iconUrl:"./img/octagon.svg",
  messageColor:"#fff",
  color:"#EF4040"
});

const form = document.querySelector('.form');

const handleSubmit = event => {
  event.preventDefault();
  showLoader();
  const formData = new FormData(event.target);
  const text = formData.get('search-text');
  if (text.length === 0) {
    return;
  }
  clearGallery();
  getImagesByQuery(text.trim())
    .then(({ data }) => {
      const { hits } = data;
      if (hits.length === 0) {
        throw Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return hits;
    })
    .then(data => {
      createGallery(data);
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: `${err}`,
      });
    })
    .finally(hideLoader());

  event.target.reset();
};
form.addEventListener('submit', handleSubmit);
