import{a as u,S as d,i}from"./assets/vendor-DuKcLXOA.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="36536171-20dffb6feebbd7a17f40a2c96",m=u.create({baseURL:"https://pixabay.com/api/"}),f=o=>m.get("",{params:{key:p,q:o,mage_type:"photo",page:13,orientation:"horizontal",safesearch:!0,per_page:21}}),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g={animationSpeed:250,fadeSpeed:250,captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250},y=new d(".gallery > li > a",g),h=({largeImageURL:o,webformatURL:s,tags:n,likes:r,views:e,comments:t,downloads:a})=>`   
   <li class="item">
          <a href=${o}>
            <img src=${s} alt=${n} />
            <div>
              <ul class="img_text_list">
                <li><span>Likes</span> ${r}</li>
                <li><span>Views</span> ${e}</li>
                <li><span>Comments</span> ${t}</li>
                <li><span>Downloads</span> ${a}</li>
              </ul>
            </div>
          </a>
        </li>`,L=o=>{const s=o.map(h).join("");l.insertAdjacentHTML("beforeend",s),y.refresh()},b=()=>{l.innerHTML=""},S=()=>{c.classList.remove("visually-hidden")},v=()=>{c.classList.add("visually-hidden")};i.settings({timeout:5e3,resetOnHover:!0,transitionIn:"flipInX",maxWidth:"400px",position:"topRight",transitionOut:"flipOutX",iconUrl:"./img/octagon.svg",messageColor:"#fff",color:"#EF4040"});const x=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".error");const O=o=>{o.preventDefault(),S();const n=new FormData(o.target).get("search-text");n.length!==0&&(b(),f(n.trim()).then(({status:r,data:e})=>{console.log(r,e);const{hits:t}=e;if(t.length===0)throw Error("Sorry, there are no images matching your search query. Please try again!");return t}).then(r=>{L(r)}).catch(r=>{console.log(r),i.error({message:`${r}`})}).finally(v()),o.target.reset())};x.addEventListener("submit",O);
//# sourceMappingURL=index.js.map
