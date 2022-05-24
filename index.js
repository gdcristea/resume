const carouselItem = document.getElementsByClassName("carousel-item");
let CarouselItemPosition = 0;
const carouselItemLength = carouselItem.length;

const carouselBtnPrev = document
  .getElementById("carousel-btn-prev")
  .addEventListener("click", moveToPrevItem);

const carouselBtnNext = document
  .getElementById("carousel-btn-next")
  .addEventListener("click", moveToNextItem);

// Hide all images
function hideAllItems() {
  for (let item of carouselItem) {
    item.classList.remove("carousel-item-visible");
    item.classList.add("carousel-item-hidden");
  }
}

function moveToPrevItem() {
  hideAllItems();

  if (CarouselItemPosition === 0) {
    CarouselItemPosition = carouselItemLength - 1;
  } else {
    CarouselItemPosition--;
  }

  carouselItem[CarouselItemPosition].classList.add("carousel-item-visible");
}

function moveToNextItem() {
  hideAllItems();

  if (CarouselItemPosition === carouselItemLength - 1) {
    CarouselItemPosition = 0;
  } else {
    CarouselItemPosition++;
  }

  carouselItem[CarouselItemPosition].classList.add("carousel-item-visible");
}
