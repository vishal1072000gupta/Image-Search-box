const accessKey = 'WJLoZCTZybO0wcFrqKR1vGEneRmfQuiYeeEXH8_f66g';
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-container');

// Function to fetch images using Unsplash API
const fetchImage = async (query) => {
    imagesContainer.innerHTML = '';
  const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=28&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  // Clear previous images
  imagesContainer.innerHTML = '';

  data.results.forEach(photo => {
    const imageElement = document.createElement('div');
     imageElement.classList.add('imagDiv');
    imageElement.innerHTML = `<img src="${photo.urls.regular}" alt="${photo.alt_description}"/>`;

    //creating overlay
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    imageElement.appendChild(overlayElement);
    imagesContainer.appendChild(imageElement);
  });
}

// Adding event listener to search form
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();
  if (inputText !== '') {
    fetchImage(inputText);
  } else {
    imagesContainer.innerHTML = '<h2>Please enter a search query.</h2>';
  }
});
