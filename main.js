import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>the gallery</h1>
  <div id="exploreContainer"></div>
  <div id="imageContainer" class="container"></div>
`;

const KEY = 'WYaoRls8J9S7BMmtRLUixQM4Ox2SJD9Ehl2Sr8m6iBQ';

const exploreContainer = document.getElementById('exploreContainer');

const inputContainer = document.createElement('div');
inputContainer.classList.add('InputContainer');

const input = document.createElement('input');
input.setAttribute('placeholder', 'Im looking for...');
input.setAttribute('id', 'input');
input.classList.add('input');
input.setAttribute('name', 'text');
input.setAttribute('type', 'text');

inputContainer.appendChild(input);
exploreContainer.appendChild(inputContainer);

const exploreImages = async () => {
  const REQUEST = document.getElementById('input').value;
  const PATH = `https://api.unsplash.com/search/photos?page=1&query=${REQUEST}&client_id=${KEY}`;

  try {
    const response = await fetch(PATH);
    const data = await response.json();
    showingImages(data.results);
  } catch (error) {
    console.log(error);
  }
};

const showingImages = (images) => {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.regular;
    imageContainer.appendChild(imgElement);
  });
};

buttonExplore.addEventListener('click', exploreImages);