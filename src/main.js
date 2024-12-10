import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import pathErrorIcon from "./img/icon-error.svg";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = '47417637-c5af89f5f9dac842b4dab7627'; 
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-input');
const list = document.querySelector('.list');
const loadMore = document.querySelector('.js-load-more');
const loader = document.querySelector(".loader");


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});


import axios from 'axios';


loadMore.addEventListener("click", onLoadMore);

let page = 1;


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



function showErrorToast(message) {
    iziToast.show({
        theme: 'dark',
        titleColor: 'white',
        titleSize: '16px',
        messageLineHeight: '150%',
        messageSize: '16px',
        color: 'white',
        iconUrl: pathErrorIcon,
        backgroundColor: "#ef4040",
        messageColor: "white",
        message,
        position: 'topRight',
        timeout: 2000
    });
}


async function serviceGallery(query = "", page = 1, perPage = 15) {
    const params = new URLSearchParams({
        key: API_KEY,
        page,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: perPage
    });

    const { data } = await axios(`${BASE_URL}?${params}`);
    return data;
}

function createMarkUp(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        `<li class="gallery">
            <a href="${largeImageURL}" class="gallery-item">
                <img class="image" src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                    <p class="title-info">Likes: <span class="value">${likes}</span></p>
                    <p class="title-info">Views: <span class="value">${views}</span></p>
                    <p class="title-info">Comments: <span class="value">${comments}</span></p>
                    <p class="title-info">Downloads: <span class="value">${downloads}</span></p>
                </div>
            </a>
        </li>`
    ).join("");
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