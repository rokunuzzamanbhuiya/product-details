(function () {
  ("use strict");

  /*
  Template Name: Product Details Page HTML Template
  Author: Rokunuzzaman Bhuiya
  Description: Product Details Page HTML Template
  File Description: Main JS file of the template
  */

  // Thumbnail Change Based On Color Selection
  const colorImages = {
    black: "./assets/img/product/big-black.png",
    blue: "./assets/img/product/big-blue.png",
    violet: "./assets/img/product/big-violet.png",
    cyan: "./assets/img/product/big-cyan.png",
  };

  // Get The Product Thumbnail
  const productThumbnail = document.getElementById("productThumbnail");

  document.querySelectorAll('input[name="bandColor"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedColor = event.target.id.replace("color", "").toLowerCase();
      productThumbnail.src = colorImages[selectedColor];
    });
  });

  // At The End
})();
