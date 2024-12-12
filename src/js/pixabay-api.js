import axios from 'axios';

const API_KEY = '47417637-c5af89f5f9dac842b4dab7627'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function serviceGallery(query = "", page = 1, perPage = 15) {
    
    
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