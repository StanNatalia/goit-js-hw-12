import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { serviceGallery } from './js/pixabay-api.js';
import { showErrorToast, createMarkUp } from './js/render-functions.js';
import iziToast from "izitoast";

const form = document.querySelector('.search-input');
const list = document.querySelector('.list');
const loadMoreButton = document.querySelector('.load-more');
const loader = document.querySelector(".loader");
let page = 1;
let lastPage;
let currentQuery = '';
   


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});

loadMoreButton.classList.add("is-hidden");
form.addEventListener("submit", handlerSearch);

async function handlerSearch(event) {
    event.preventDefault();
    const { query } = event.target.elements;
    const trimmedQuery = query.value.trim();
    

    if (!trimmedQuery) {
        showErrorToast("Please enter a search query!");
        list.innerHTML = '';
        loader.style.display = "none";
        loadMoreButton.classList.add("is-hidden");
        return;
    }

    currentQuery = trimmedQuery;
    page = 1;
    list.innerHTML = '';
    loader.style.display = "block";
    loadMoreButton.classList.remove("is-hidden");

    
try {
    const data = await serviceGallery(currentQuery, page);
    lastPage = Math.ceil(data.total / 15);

    if (data.hits.length === 0) {
        loader.style.display = "none";
        loadMoreButton.classList.add("is-hidden");
        showErrorToast("No images found. Please try a different query!");
        return;
    }
    list.innerHTML = createMarkUp(data.hits);
    lightbox.refresh();
           
} catch(error) {
            showErrorToast("Sorry, there are no images matching your search query. Please try again!");
            list.innerHTML = '';
            loader.style.display = "none";
            loadMoreButton.classList.add("is-hidden");
} finally {
            loader.style.display = "none";
            event.target.reset();
        }
}


async function loadGallery(page) {
    try {
        const data = await serviceGallery(currentQuery,page);
        console.log(data);

        loadGallery();

        if (data.total > 15) {
            loadMoreButton.classList.remove("is-hidden");
            console.log("data.total");
        } else {
            iziToast.info({title: 'End of results', message: 'You have reached the end of the search results.'});
        }
    } catch (error) {
        loadMoreButton.classList.add('is-hidden');
        loader.style.display = "none";
        iziToast.info({title: 'Error', message: error.message});
    }
}

loadMoreButton.addEventListener("click", onLoadMore);


async function onLoadMore() {
    page++;
    loadMoreButton.classList.remove('is-hidden');

    try {
        const data = await serviceGallery(currentQuery, page);
        list.insertAdjacentHTML("beforeend", createMarkUp(data.hits));
        if (lastPage === page ) { 
            loadMoreButton.classList.add("is-hidden");
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
        loader.style.display = "none";
        loadMoreButton.classList.add("is-hidden");
    }
}




