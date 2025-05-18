
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
        console.log(video.thumbnail);
        const videoCard = document.createElement('div');
        videoCard.classList = 'card shadow-sm';
        videoCard.innerHTML = `
        <figure class='h-[200px]'>
    <img class="w-full object-cover h-full cursor-pointer"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="flex px-2 py-4 gap-4">
  <img class="w-10 h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="" />
    <div class="flex flex-col">
         <h2 class="card-title">${video.title}</h2>
        <p class="text-sm text-gray-500 font-bold py-1">${video.authors[0].profile_name}
        <img width="16" height="16" class='${video.authors[0].verified ? 'inline' : 'hidden'}' src="https://img.icons8.com/fluency-systems-filled/48/228BE6/verified-badge.png" alt="verified-badge"/>
        </p>
        <p class="text-sm text-gray-500 font-semibold">${video.others.views} views</p>
        </div>
  </div>`;
        videoContainer.appendChild(videoCard);
    })
  
}
loadVideos();
loadCategories();