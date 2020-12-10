import galleryItems from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
// let gallery = 0
let newArry = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item data-action = "open-modal" >
     <a class="gallery__link"  href= ${preview}>
         <img
         
             class="gallery__image"
             src= ${original}
             data-source= ${preview}
             alt= ${description}
         />
     </a>
 </li>`;
  })
  .join("");
// console.log(newArry);
galleryRef.innerHTML = newArry;

const listRef = document.querySelector(".js-gallery");
const body = document.querySelector("body");
const modalWindow = document.querySelector('.lightbox')
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const imageOnModal = document.querySelector('.lightbox__image')

listRef.addEventListener('click',openModal)

function openModal() {
  modalWindow.classList.add('is-open')
}

closeModalBtn.addEventListener('click',closeModal)

function closeModal() {
    modalWindow.classList.remove('is-open')

}
listRef.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  event.preventDefault()
  
  if (event.target.nodeName !== 'IMG') {
    return
  }
  const largeImgUrl = event.target.dataset.source
  
  setLargeImage(largeImgUrl)
}
function setLargeImage(url) {
  imageOnModal.src = url
}
