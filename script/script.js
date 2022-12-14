let mobileNavBar = document.querySelector('.mobileNavBar');
let menuListBlock = document.querySelector('.menuListBlock');

mobileNavBar.addEventListener('click', function(){
    menuListBlock.classList.toggle('menuListHeight');
});



let newArrivalsPriceBlock = document.querySelector('.newArrivalsPriceBlock');
let seeMore = document.querySelector('.seeMoreBtn');
let arrivalsBlock = document.querySelector('.newArrivalsBlock');

seeMore.addEventListener('click', function(){
    document.querySelector('.seeMoreBlock').style.display = 'none';
    arrivalsBlock.style.height = 'auto';
    let cloneNewArrivals = newArrivalsPriceBlock.cloneNode(true);
    newArrivalsPriceBlock.after(cloneNewArrivals);
});


let menuBlockSearch = document.querySelector('.menuBlockSearch');
let searchForm = document.querySelector('.search-form');
let searchPlaceholder = document.querySelector('.search-placeholder');
menuBlockSearch.addEventListener('click', function(){
    searchPlaceholder.classList.add('search-placeholder-visible');
});