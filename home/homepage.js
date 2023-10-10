const headerText = document.getElementById('headerText');

const texts = [
    'Easy return',
    'Free shipping for adiclub members and all orders in app'
];

let currentIndex = 0;

function changeHeaderText() {
    headerText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

changeHeaderText(); // Initial text

setInterval(changeHeaderText, 3000); // Change text every 2 seconds

const mainMenu = document.querySelector('.main-menu');
const subHeader = document.querySelector('.sub-header');

mainMenu.addEventListener('mouseover', () => {
    subHeader.style.display = 'block';
});

mainMenu.addEventListener('mouseout', () => {
    subHeader.style.display = 'none';
});


const carousel = document.querySelector('.carousel-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.offsetWidth, // Cuộn về phía trước một khung sản phẩm
    behavior: 'smooth', // Tạo hiệu ứng cuộn mượt
  });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.offsetWidth, // Cuộn về phía sau một khung sản phẩm
    behavior: 'smooth',
  });
});



// JavaScript
const newArrivalsCarousel = document.querySelector('.newArrivalsCarousel .carousels');
const trendingCarousel = document.querySelector('.trendingCarousel .carousels');

const blackButton = document.querySelector('.black-button');
const whiteButton = document.querySelector('.white-button');

// Ẩn một trong hai carousel ban đầu khi trang vừa được tải
trendingCarousel.style.display = 'none';

// Xử lý sự kiện khi nhấp vào nút "New Arrivals"
blackButton.addEventListener('click', () => {
    // Hiển thị newArrivalsCarousel
    newArrivalsCarousel.style.display = 'flex';
    // Ẩn trendingCarousel
    trendingCarousel.style.display = 'none';
    // Thay đổi màu sắc của nút
    blackButton.style.backgroundColor = 'black';
    blackButton.style.color = 'white';
    whiteButton.style.backgroundColor = 'white';
    whiteButton.style.color = 'black';
});

// Xử lý sự kiện khi nhấp vào nút "What’s Trending"
whiteButton.addEventListener('click', () => {
    // Hiển thị trendingCarousel
    trendingCarousel.style.display = 'flex';
    // Ẩn newArrivalsCarousel
    newArrivalsCarousel.style.display = 'none';
    // Thay đổi màu sắc của nút
    blackButton.style.backgroundColor = 'white';
    blackButton.style.color = 'black';
    whiteButton.style.backgroundColor = 'black';
    whiteButton.style.color = 'white';
});








  