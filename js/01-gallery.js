import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const imgArr = [];

galleryItems.forEach((item) => {
  const imgElement = `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`;
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

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => window.addEventListener("keydown", imgCloseModalEsc),
      onClose: () => window.removeEventListener("keydown", imgCloseModalEsc),
    }
  );

  instance.show();

  function imgCloseModalEsc(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
