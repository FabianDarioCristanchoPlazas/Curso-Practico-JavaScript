const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const burguerMenu = document.querySelector('.menu ');
const mobileMenu = document.querySelector('.mobile-menu ');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    } {
        closeProductDetailAside();
        desktopMenu.classList.toggle('inactive');
    }

}
function togglemobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    } {
        {
            closeProductDetailAside();
            mobileMenu.classList.toggle('inactive');
        }
    }
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } {
        if (!isProductDetailClosed) {
            productDetailContainer.classList.add('inactive');
        } {
            if (!isDesktopMenuClosed) {
                desktopMenu.classList.add('inactive');
            } {
                shoppingCartContainer.classList.toggle('inactive');
            }

        }
    }
}
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    nameProduct: 'Bike',
    priceProduct: 120,
    imagenProduct: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    nameProduct: 'Car',
    priceProduct: 120000,
    imagenProduct: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    nameProduct: 'Motocicleta',
    priceProduct: 32000,
    imagenProduct: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    nameProduct: 'Pantalla',
    priceProduct: 220,
    imagenProduct: 'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    nameProduct: 'Televisor',
    priceProduct: 120,
    imagenProduct: 'https://images.pexels.com/photos/5721879/pexels-photo-5721879.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    nameProduct: 'SmartPhone',
    priceProduct: 120,
    imagenProduct: 'https://images.pexels.com/photos/12339129/pexels-photo-12339129.jpeg?auto=compress&cs=tinysrgb&w=600'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product={name,price,imagen}
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagenProduct);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.priceProduct;
        const productName = document.createElement('p');
        productName.innerText = product.nameProduct;

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCard);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);



