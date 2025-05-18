
const loadCategories = async () => {
    const categoryContainer = document.querySelector('#category-container');
    
    // fetching categories from the API
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await response.json();
    const categories = data.categories;
    categories.forEach(category => {
        // console.log(category.category);
        const categoryDiv = document.createElement('div');
        categoryDiv.classList = 'btn btn-glass';
        categoryDiv.innerText = category.category;
        categoryContainer.appendChild(categoryDiv);
    })
}

const loadVideos = async () => {
    const videoContainer = document.querySelector('#video-container');

    // fetching videos from the API
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await response.json();
    const videos = data.videos;
    console.log(videos);
    videos.forEach(video => {
        console.log(video);
        const videoCard = document.createElement('div');
        videoCard.classList = 'card shadow-sm';
        videoCard.innerHTML = `
        <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
        videoContainer.appendChild(videoCard);
    })
  
}
loadVideos();
loadCategories();