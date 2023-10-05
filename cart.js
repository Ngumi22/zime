let productThumbs = '';

const queryParams = new URLSearchParams(window.location.search);

const productTitle = queryParams.get('title');
const productImage = queryParams.get('image');
const productDescription = queryParams.get('description');
const productPrice = queryParams.get('price');
const productColor = queryParams.get('color');
const productScreen = queryParams.get('touchscreen');
const productSize = queryParams.get('size');
const productOs = queryParams.get('os');
const productProcessor = queryParams.get('processor');
const productGeneration = queryParams.get('generation');
const productStorage = queryParams.get('storage');
const productRatings = queryParams.get('userRatings');
const productBrand = queryParams.get('brand');
const productTheme = queryParams.get('theme');

const imageElement = document.getElementById('product-image');
imageElement.src = productImage;



const themeElement = document.getElementById('product-theme');
themeElement.textContent = productTheme;

const brandElement = document.getElementById('product-brand');
brandElement.textContent = productBrand;

const titleElement = document.getElementById('product-title');
titleElement.textContent = productTitle;

const descriptionElement = document.getElementById('product-description');
descriptionElement.textContent = productDescription;

const priceElement = document.getElementById('product-price');
priceElement.textContent = productPrice;

const colorElement = document.getElementById('product-color');
colorElement.textContent = productColor;

const touchscreen = document.getElementById('product-touchscreen');
touchscreen.textContent = productScreen;

const sizeElement = document.getElementById('product-size');
sizeElement.textContent = productSize;

const osElement = document.getElementById('product-os');
osElement.textContent = productOs;

const processorElement = document.getElementById('product-processor');
processorElement.textContent = productProcessor;

const generationElement = document.getElementById('product-generation');
generationElement.textContent = productGeneration;

const stotageElement = document.getElementById('product-storage');
stotageElement.textContent = productStorage;

const ratingsElement = document.getElementById('product-ratings');
ratingsElement.textContent = productRatings;




productThumbs = queryParams.get('thumbnails');

const thumbnailContainer = document.getElementById('thumbnail-gallery');

if (productThumbs) {
    const thumbnailUrls = productThumbs.split(',');

    thumbnailUrls.forEach((thumbnailUrl) => {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.classList.add('my-2', 'border-1', 'border-black')
        thumbnailImg.src = thumbnailUrl;
        thumbnailImg.style.height = '100px';
        thumbnailContainer.appendChild(thumbnailImg);
    });
}
function handleThumbnailClick(event) {
    const thumbnailSrc = event.target.src;
    imageElement.src = thumbnailSrc;
}

const thumbnailImages = thumbnailContainer.getElementsByTagName('img');
for (const thumbnailImg of thumbnailImages) {
    thumbnailImg.addEventListener('click', handleThumbnailClick);
}


const productImageElement = document.getElementById('product-image');
const productImageContainer = document.querySelector('.product-images');

let zoomLevel = 1;
const maxZoomLevel = 2;

function calculateZoomPosition(event) {

    const x = (event.clientX - productImageContainer.getBoundingClientRect().left) / productImageContainer.clientWidth;
    const y = (event.clientY - productImageContainer.getBoundingClientRect().top) / productImageContainer.clientHeight;

    zoomLevel = Math.min(zoomLevel + 0.5, maxZoomLevel);

    productImageElement.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    productImageElement.style.transform = `scale(${zoomLevel})`;

    const imageWidth = productImageElement.clientWidth;
    const imageHeight = productImageElement.clientHeight;
    const containerWidth = productImageContainer.clientWidth;
    const containerHeight = productImageContainer.clientHeight;

    if (imageWidth > containerWidth || imageHeight > containerHeight) {
        productImageElement.style.transform = 'scale(1)';
    }
}

function resetZoom() {
    zoomLevel = 1;
    productImageElement.style.transformOrigin = 'top left';
    productImageElement.style.transform = 'scale(1)';
}

productImageContainer.addEventListener('mousemove', calculateZoomPosition);
productImageContainer.addEventListener('mouseleave', resetZoom);


const thumbnailGallery = document.getElementById('thumbnail-gallery');
const scrollUpButton = document.getElementById('scroll-up');
const scrollDownButton = document.getElementById('scroll-down');

scrollUpButton.addEventListener('click', () => {
    // Scroll up by subtracting a value from scrollTop
    thumbnailGallery.scrollTop -= 50; // Adjust the scroll amount as needed
});

scrollDownButton.addEventListener('click', () => {
    // Scroll down by adding a value to scrollTop
    thumbnailGallery.scrollTop += 50; // Adjust the scroll amount as needed
});
