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


function changeActive(item) {
    // Bỏ chữ in đậm và class "active" từ tất cả các mục
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
      navItem.style.fontWeight = 'normal';
    });
  
    // Đặt class "active" và in đậm cho mục được chọn
    item.classList.add('active');
    item.style.fontWeight = 'bold';}

    function toggleFilterPanel() {
      const filterPanel = document.getElementById("filterPanel");
      const filterButton = document.querySelector(".filter-button");
    
      if (filterPanel.style.right === "0%" || filterPanel.style.right === "") {
        filterPanel.style.right = "-33%";
        filterButton.classList.remove("active");
      } else {
        filterPanel.style.right = "0%";
        filterButton.classList.add("active");
      }
    }
    
    function closeFilterPanel() {
      const filterPanel = document.getElementById("filterPanel");
      const filterButton = document.querySelector(".filter-button");
    
      filterPanel.style.right = "-33%";
      filterButton.classList.remove("active");
    }
    
    document.addEventListener("DOMContentLoaded", function () {
      const filterPanel = document.getElementById("filterPanel");
    
      document.querySelector(".filter-button").addEventListener("click", function () {
        toggleFilterPanel();
      });
    
      filterPanel.addEventListener("click", function (event) {
        // Kiểm tra xem người dùng đã nhấp vào bên ngoài bảng hay không
        if (event.target === filterPanel) {
          closeFilterPanel();
        }
      });
    
      document.querySelector(".clear-all").addEventListener("click", function () {
        clearAllFilters();
        closeFilterPanel(); // Đóng bảng khi nhấp vào "Clear All"
      });
    
      document.querySelector(".close-button").addEventListener("click", function () {
        closeFilterPanel();
      });
    });








    function toggleArrow(arrow) {
      const currentArrow = arrow.textContent;
      const upArrow = "\u25B2"; // Mũi tên chỉ hướng lên trên
      const downArrow = "\u25BC"; // Mũi tên chỉ hướng xuống dưới
  
      if (currentArrow === downArrow) {
          arrow.textContent = upArrow;
      } else {
          arrow.textContent = downArrow;
      }
  }
  
  function toggleSortOptions() {
      const sortOptions = document.querySelector('.sort-options');
      const filterArrow = document.querySelector('.filter-arrower');
  
      // Đóng bảng Size (nếu đang mở)
      closeSizeTable();
  
      // Kiểm tra trạng thái hiển thị của các mục con
      if (sortOptions.style.display === 'none' || sortOptions.style.display === '') {
          sortOptions.style.display = 'block';
          filterArrow.textContent = '\u25B2'; // Chuyển mũi tên lên trên
      } else {
          sortOptions.style.display = 'none';
          filterArrow.textContent = '\u25BC'; // Chuyển mũi tên xuống dưới
      }
  }
  
  function toggleSizeTable() {
      const sizeTable = document.getElementById("sizeTable");
      const sizeArrow = document.querySelector('.filter-arrow'); // Đổi tên biến thành sizeArrow
  
      // Đóng các mục con của Sort by (nếu đang mở)
      closeSortOptions();
  
      // Kiểm tra trạng thái hiển thị của bảng Size
      if (sizeTable.style.display === 'none' || sizeTable.style.display === '') {
          sizeTable.style.display = 'block';
          sizeArrow.textContent = '\u25B2'; // Chuyển mũi tên lên trên
      } else {
          sizeTable.style.display = 'none';
          sizeArrow.textContent = '\u25BC'; // Chuyển mũi tên xuống dưới
      }
  }
  
  // Các hàm xử lý sự kiện khác
  // ...
  
  



function selectSortOption(option) {
    // Xử lý khi chọn một mục con của Sort by
    console.log(option.textContent);
    // Thêm mã xử lý tùy ý ở đây

    // Đóng các mục con của Sort by
    closeSortOptions();
}

function selectSize(size) {
    // Xử lý khi chọn một mục con của Size
    console.log(size.textContent);
    // Thêm mã xử lý tùy ý ở đây

    // Đóng bảng Size
    closeSizeTable();
}

// Đóng tất cả các mục con (trong trường hợp ấn vào mục Sort by)
function closeSortOptions() {
    const sortOptions = document.querySelector('.sort-options');
    sortOptions.style.display = 'none';
    const filterArrow = document.querySelector('.filter-arrow');
    filterArrow.textContent = '\u25BC'; // Chuyển mũi tên xuống dưới
}

// Đóng bảng Size
function closeSizeTable() {
    const sizeTable = document.getElementById("sizeTable");
    const sizeArrow = document.querySelector('.filter-arrow');
    sizeArrow.textContent = '\u25BC'; // Chuyển mũi tên xuống dưới
    sizeTable.style.display = "none";
}


function toggleColorTable(arrow) {
  const colorTable = document.getElementById("colorTable");
  const currentArrow = arrow.textContent;
  const upArrow = "\u25B2"; // Mũi tên chỉ hướng lên trên
  const downArrow = "\u25BC"; // Mũi tên chỉ hướng xuống dưới

  if (currentArrow === downArrow) {
    arrow.textContent = upArrow;
    colorTable.style.display = "block"; // Hiển thị bảng màu khi ấn xuống
  } else {
    arrow.textContent = downArrow;
    colorTable.style.display = "none"; // Ẩn bảng màu khi ấn lên
  }

  // Đóng bảng màu khi chọn một màu cụ thể
  const colorItems = document.querySelectorAll('.color-item');
  colorItems.forEach((colorItem) => {
    colorItem.addEventListener('click', () => {
      arrow.textContent = downArrow; // Quay mũi tên khi chọn màu
      closeColorTable(); // Đóng bảng màu sau khi chọn
    });
  });
}

// Đóng bảng màu
function closeColorTable() {
  const colorTable = document.getElementById("colorTable");
  const colorArrow = document.querySelector('.filter-arrow');
  colorArrow.textContent = '\u25BC'; // Chuyển mũi tên xuống dưới
  colorTable.style.display = "none";
}





// script.js
function toggleBrandOptions() {
  const brandOptions = document.querySelector('.brand-options');
  const filterArrow = document.querySelector('.filter-arrowing');
  
  // Kiểm tra trạng thái hiển thị của các mục con
  if (brandOptions.style.display === 'none' || brandOptions.style.display === '') {
      brandOptions.style.display = 'block';
      filterArrow.textContent = '\u25B2'; // Chuyển mũi tên lên trên
  } else {
      brandOptions.style.display = 'none';
      filterArrow.textContent = '\u25BC'; // Chuyển mũi tên xuống dưới
  }
}





function selectNumber(number) {
  document.getElementById('selected-item').textContent = number;
}