import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { serviceGallery } from './js/pixabay-api.js';
import { showErrorToast, createMarkUp } from './js/render-functions.js';

const form = document.querySelector('.search-input');
const list = document.querySelector('.list');
const loadMore = document.querySelector('.js-load-more');
const loader = document.querySelector(".loader");
let page = 1;


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});


form.addEventListener("submit", handlerSearch);

function handlerSearch(event) {
    event.preventDefault();
    const { query } = event.target.elements;

    if (!query.value) {
        showErrorToast("Please enter a search query!");
        list.innerHTML = '';
        loader.style.display = "none";
        return;
    }


    list.innerHTML = '';
    loader.style.display = "block";
    


    serviceGallery(query.value)

        .then(data => {
            if (data.hits.length === 0) {
                showErrorToast("No images found. Please try a different query!");
                return;
            }
            list.innerHTML = createMarkUp(data.hits);
            lightbox.refresh();
        })

        .catch(error => {
            showErrorToast("Sorry, there are no images matching your search query. Please try again!");
            list.innerHTML = '';
            loader.style.display = "none";
        })

        .finally(() => {
            loader.style.display = "none";
            event.target.reset();
        });
}


serviceGallery(page)
.then(data => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkUp(data.hits));

    if(data.total > page * 15) {
        loadMore.classList.replace("load-more-hidden", "load-more");} 
})
.catch(error => 
    alert(error.message)
)

loadMore.addEventListener("click", onLoadMore);


async function onLoadMore() {
    page++;

    try {
        const data = await serviceGallery(page);
        list.insertAdjacentHTML("beforeend", createMarkUp(data.hits));
        if (data.total <= page * 15) { 
            loadMore.classList.add("load-more-hidden");
        }
    } catch(error) {
        alert(error.message);
    }
}




