
const loadCategories = async () => {
    const categoryContainer = document.querySelector('#category-container');
    
    // fetching categories from the API
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await response.json();
    const categories = data.categories;
    categories.forEach(category => {
        console.log(category);
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button onclick="loadCategoryVideos(${category.category_id})" id="category-${category.category_id}" class="btn">${category.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}

const loadVideos = async () => {
    document.querySelector('#video-container').innerHTML = '';
    // fetching videos from the API
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await response.json();
    displayVideos(data.videos);
    
    
}

const displayVideos = (videos) => {
    const videoContainer = document.querySelector('#video-container');
        console.log(videos);
        
    videos.forEach(video => {
        const hour = parseInt(video.others.posted_date / 3600).toString().padStart(2, '0');
        const minute = parseInt((video.others.posted_date % 3600)/60).toString().padStart(2, '0');
        const second = ((video.others.posted_date % 3600) - (minute * 60)).toString().padStart(2, '0');
        const videoCard = document.createElement('div');
        videoCard.classList = 'card shadow-sm';
        videoCard.innerHTML = `
        <figure class='h-[200px] relative'>
    <img class="w-full object-cover h-full cursor-pointer"
      src="${video.thumbnail}"
      alt="Shoes" />
      ${video.others.posted_date ? `<span class="absolute bottom-2 right-2 bg-black/60 text-white font-bold text-xs px-2 py-1 rounded-full">${hour} : ${minute} : ${second}</span>` : ''}
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
  

const loadCategoryVideos = async (categoryId) => {
    const activeCategory = document.getElementById(`category-${categoryId}`);
    document.querySelector('#video-container').innerHTML = '';

     // fetching videos from the API
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`);
    const data = await response.json();
    displayVideos(data.category);


    
    

    console.log(data.category);
}

loadVideos();
loadCategories();
loadCategoryVideos();