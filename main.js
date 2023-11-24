import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>the gallery</h1>
  <h2>Unsplash: Your one-stop for stunning, free-to-use images from top photographers worldwide. Elevate your projects without worrying about royalties or attributions.</h2>
  <p>Please enter the keyword in the field below to get related photos!</p>
  <div id="exploreContainer">
    <div class="InputContainer">
      <input placeholder="e.g.: flowers, morning..." id="input" class="input" name="text" type="text">
    </div>      
  </div>
  <div id="imageContainer" class="container"></div>
  <footer>
    <div class="footer-content">
      <p>&copy; 2023 The gallery</p>
      <p>Created by <a target="_blank" href="https://www.linkedin.com/in/rociodomjim/">Rocío Domínguez</a></p>
    </div>
  </footer>
`;

const KEY = 'WYaoRls8J9S7BMmtRLUixQM4Ox2SJD9Ehl2Sr8m6iBQ';

const imageContainer = document.getElementById('imageContainer');
const inputValue = document.getElementById('input');
const exploreContainer = document.getElementById('exploreContainer');

const buttonExplore = document.createElement('button');
buttonExplore.textContent = "search";
buttonExplore.classList.add('exploreButton');

exploreContainer.appendChild(buttonExplore);

const exploreImages = async () => {
  const REQUEST = inputValue.value;
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

  if (images.length === 0) {
    const alertMessage = document.createElement('h3');
    alertMessage.textContent = "Sorry :( No images found";
    alertMessage.classList.add('alert-message');
    imageContainer.appendChild(alertMessage);
  } else {
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.regular;
      imageContainer.appendChild(imgElement);
    });
  }
};

buttonExplore.addEventListener('click', exploreImages);

window.addEventListener('DOMContentLoaded', () => {
  inputValue.value = 'flowers';
  exploreImages();
});