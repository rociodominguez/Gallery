import './style.css';
import { printHeader } from './components/Header/Header';
import { printMain } from './components/Main/Main';
import { printFooter } from './components/Footer/Footer';
import { createSearchInput } from './components/Input/Input';
import { createSearchButton } from './components/Button/Button';

const app = document.querySelector('#app');

const initializeApp = () => {
  app.innerHTML = printHeader() + printMain() + printFooter();

  const KEY = 'WYaoRls8J9S7BMmtRLUixQM4Ox2SJD9Ehl2Sr8m6iBQ';
  const imageContainer = document.getElementById('imageContainer');
  const exploreContainer = document.getElementById('exploreContainer');

  const inputExplore = createSearchInput();
  const buttonExplore = createSearchButton();
  exploreContainer.appendChild(inputExplore);
  exploreContainer.appendChild(buttonExplore);

  const exploreImages = async () => {
    const REQUEST = inputExplore.querySelector('#input').value;
    const PATH = `https://api.unsplash.com/search/photos?page=1&query=${REQUEST}&client_id=${KEY}`;

    try {
      const response = await fetch(PATH);
      const data = await response.json();
      showingImages(data.results);
    } catch (error) {
      console.log('error');
    }
  };

  const showingImages = (images) => {
    imageContainer.innerHTML = '';

    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.regular;
      imageContainer.appendChild(imgElement);
    });
  };

  buttonExplore.addEventListener('click', exploreImages);

  inputExplore.querySelector('#input').value = 'Flowers';
  exploreImages(); 
};

window.addEventListener('DOMContentLoaded', initializeApp);
