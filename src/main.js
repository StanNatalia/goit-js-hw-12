import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { serviceGallery } from './js/pixabay-api.js';
import { showErrorToast, createMarkUp } from './js/render-functions.js';
import iziToast from "izitoast";

const form = document.querySelector('.search-input');
const list = document.querySelector('.list');
const loadMore = document.querySelector('.js-load-more');
const loader = document.querySelector(".loader");
let page = 1;
let lastPage;
let currentQuery = '';
   


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});


form.addEventListener("submit", handlerSearch);

async function handlerSearch(event) {
    event.preventDefault();
    const { query } = event.target.elements;

    if (!query.value) {
        showErrorToast("Please enter a search query!");
        list.innerHTML = '';
        loader.style.display = "none";
        return;
    }

    currentQuery = query.value;
    page = 1;
    list.innerHTML = '';
    loader.style.display = "block";
    loadMore.classList.add("is-hidden");

    
try {
    const data = await serviceGallery(currentQuery, page);
    lastPage = Math.ceil(data.total / 15);
    if (data.hits.length === 0) {
        showErrorToast("No images found. Please try a different query!");
        return;
    }
    list.innerHTML = createMarkUp(data.hits);
    lightbox.refresh();
    loadMore.classList.toggle("is-hidden", lastPage <= page);
           
} catch(error) {
            showErrorToast("Sorry, there are no images matching your search query. Please try again!");
            list.innerHTML = '';
            loader.style.display = "none";
} finally {
            loader.style.display = "none";
            event.target.reset();
        }
}


async function loadGallery(page) {
    try {
        const data = await serviceGallery(currentQuery,page);
        console.log(data);

        if (data.total > 15) {
            loadMore.classList.replace("is-hidden", "load-more");
        } else {
            loadMore.classList.add('is-hidden');
            iziToast.info({title: 'End of results', message: 'You have reached the end of the search results.'});
        }
    } catch (error) {
        loadMore.classList.add('is-hidden');
        iziToast.info({title: 'Error', message: error.message});
    }
}

loadGallery();

loadMore.addEventListener("click", onLoadMore);


async function onLoadMore() {
    page++;
    loadMore.classList.remove('is-hidden');

    try {
        const data = await serviceGallery(currentQuery, page);
        list.insertAdjacentHTML("beforeend", createMarkUp(data.hits));
        if (lastPage === page ) { 
            loadMore.classList.add("is-hidden");
        }

        const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
    const cardHeight = galleryItems[0].getBoundingClientRect().height;

    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth', 
    });
  }

        
        
    } catch(error) {
        alert(error.message);
        loadMore.classList.add("is-hidden");
    }
}




