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

function hideProductDetails(button) {
    // Tìm phần tử cha của nút X (product-details) và ẩn nó
    const productDetails = button.parentElement;
    productDetails.style.display = "none";
}

const billingCheckbox = document.getElementById('billing-same');
const addressForm = document.querySelector('.address-form');

billingCheckbox.addEventListener('change', function () {
    if (this.checked) {
        addressForm.style.display = 'none';
    } else {
        addressForm.style.display = 'block';
    }
});