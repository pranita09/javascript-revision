const imageContainer = document.getElementById("image-container");
const loading = document.getElementById("loading");

let page = 1;
const limit = 10;

// fetch images from the API
const fetchImages = async (page, limit) => {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    );
    const images = await response.json();
    return images;
  } catch (error) {
    console.log("Error while fetching images from API", error);
  }
};

// display images
const displayImages = (images) => {
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.download_url;
    imgElement.alt = image.author;
    imageContainer.appendChild(imgElement);
  });
};

// show loading
const showLoading = () => {
  loading.classList.add("show");
};

// hide loading
const hideLoading = () => {
  loading.classList.remove("show");
};

// load more images
const loadMoreImages = async () => {
  showLoading();
  const images = await fetchImages(page, limit);
  displayImages(images);
  hideLoading();
  page++;
};

// Intersection Observer to detect when user is near the bottom of the page
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadMoreImages();
    }
  },
  {
    rootMargin: "0px",
    threshold: 1.0,
  }
);

// start observing the loading element
observer.observe(loading);

// initial load
loadMoreImages();
