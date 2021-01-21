document.getElementById("search").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchBox").value;
    console.log(searchTerm);
  
    fetch(
      `https://api.unsplash.com/search/photos?client_id=PLoIRtzsZ7KTJ-Aqw6wh90888DEDRMy8isN186a7xzE&query=${searchTerm}`
    )
    
      .then(response => response.json())
      .then(data => {
        let imagesMarkup = "";
  
        data.results.map(searchResults => {
          return (imagesMarkup += `<img class="searchImg" src="${searchResults.urls.small}">`);
        });
  
        document.getElementById("images").innerHTML = imagesMarkup;
      });
  });
  
  const requestUrl =
  'https://api.unsplash.com/search/photos?query=code&client_id=PLoIRtzsZ7KTJ-Aqw6wh90888DEDRMy8isN186a7xzE';
const getImagesButton = document.querySelector('.getImagesButton');
const imageToDisplay = document.querySelector('.imageToDisplay');

getImagesButton.addEventListener('click', async () => {
  let randomImage = await getNewImage();
  imageToDisplay.src = randomImage;
});

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}
       