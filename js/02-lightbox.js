import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const imgArr = [];

galleryItems.forEach((item) => {
  const imgElement = `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"  title="${item.description}"/></a>`;
  imgArr.push(imgElement);
});

const imgStr = imgArr.join("");

gallery.insertAdjacentHTML("afterbegin", imgStr);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
