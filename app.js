const wrapper = document.querySelector(".slider-wrapper");
const links = document.querySelectorAll(".navigation-item");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
let currentImage = document.querySelector(".product-image");
let currentTitle = document.querySelector(".product-title");
let currentPrice = document.querySelector(".product-price");
let currentColor = document.querySelectorAll(".color");
let currentSize = document.querySelectorAll(".size");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change product content
    choosenProduct = products[index];
    currentImage.src = choosenProduct.colors[0].img;
    currentTitle.textContent = choosenProduct.title;
    currentPrice.textContent = ` $ ${choosenProduct.price}`;

    //assign new color
    currentColor.forEach((color, i) => {
      color.style.background = choosenProduct.colors[i].code;
    });
  });
});

currentColor.forEach((color, i) => {
  color.addEventListener("click", () => {
    currentImage.src = choosenProduct.colors[i].img;
  });
});

currentSize.forEach((size, i) => {
  size.addEventListener("click", function () {
    currentImage.style.width = `${50 + (i + 2)}%`;
    currentSize.forEach((size) => {
      size.classList.remove("active");
    });
    size.classList.add("active");
  });
});

let productButton = document.querySelector(".productButton");
let payment = document.querySelector(".payment");
let close = document.querySelector(".close");

productButton.addEventListener("click", function () {
  payment.style.display = "flex";
});

close.addEventListener("click", function () {
  payment.style.display = "none";
});
