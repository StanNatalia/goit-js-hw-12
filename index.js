import{a as y,i as C,S as L}from"./assets/vendor-D0cagnvz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const w="47417637-c5af89f5f9dac842b4dab7627",v="https://pixabay.com/api/";async function h(t="",s=1,r=15){const i=new URLSearchParams({key:w,page:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r}),{data:e}=await y(`${v}?${i}`);return e}const S="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_88021_8)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_88021_8'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function u(t){C.show({theme:"dark",titleColor:"white",titleSize:"16px",messageLineHeight:"150%",messageSize:"16px",color:"white",iconUrl:S,backgroundColor:"#ef4040",messageColor:"white",message:t,position:"topRight",timeout:2e3})}function f(t){return t.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:a,comments:n,downloads:m})=>`<li class="gallery">
            <a href="${r}" class="gallery-item">
                <img class="image" src="${s}" alt="${i}" loading="lazy" />
                <div class="info">
                    <p class="title-info">Likes: <span class="value">${e}</span></p>
                    <p class="title-info">Views: <span class="value">${a}</span></p>
                    <p class="title-info">Comments: <span class="value">${n}</span></p>
                    <p class="title-info">Downloads: <span class="value">${m}</span></p>
                </div>
            </a>
        </li>`).join("")}const b=document.querySelector(".search-input"),l=document.querySelector(".list"),o=document.querySelector(".load-more"),d=document.querySelector(".loader");let c=1,g,p="",M=new L(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});o.classList.add("is-hidden");b.addEventListener("submit",P);async function P(t){t.preventDefault();const{query:s}=t.target.elements;if(!s.value){u("Please enter a search query!"),l.innerHTML="",d.style.display="none";return}p=s.value,c=1,l.innerHTML="",d.style.display="block",o.classList.remove("is-hidden");try{const r=await h(p,c);if(g=Math.ceil(r.total/15),r.hits.length===0){u("No images found. Please try a different query!");return}l.innerHTML=f(r.hits),M.refresh()}catch{u("Sorry, there are no images matching your search query. Please try again!"),l.innerHTML="",d.style.display="none"}finally{d.style.display="none",t.target.reset()}}o.addEventListener("click",q);async function q(){c++,o.classList.remove("is-hidden");try{const t=await h(p,c);l.insertAdjacentHTML("beforeend",f(t.hits)),g===c&&o.classList.add("is-hidden");const s=document.querySelectorAll(".gallery-item");if(s.length>0){const r=s[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch(t){alert(t.message),o.classList.add("is-hidden")}}
//# sourceMappingURL=index.js.map