import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const imgArr = [];

galleryItems.forEach((item) => {
  const imgElement = `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"  title="${item.description}"/></a>`;
  imgArr.push(imgElement);
});

const imgStr = imgArr.join("");

gallery.insertAdjacentHTML("afterbegin", imgStr);

gallery.addEventListener("click", imgOpenModal);
function imgOpenModal(event) {
  event.preventDefault();

  if (event.target === gallery) {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });

  function imgCloseModalEsc(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
