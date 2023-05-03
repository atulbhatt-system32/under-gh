function addFooter() {
  const TEMPLATE = `
  <div class="direction-column padding-xl gap-xl">
    <a href="/">
      <img src="https://weareunder.design/images/under-footer.svg" style="width: 102px;">
    </a>
    <h4 class="box">
      under creates high-quality,<br>
      well-designed, creative brands <br>
      and products for creative people.
    </h4>
    <div class="direction-row">
      <a href="https://store.weareunder.design/">
        <h4>Store</h4>
      </a>
      <a href="https://www.figma.com/file/UTvs6k6N1lAOLBerchdKFV/Under?node-id=351%3A772&t=lUyeBYt3fKsDLcU9-1" target="_blank">
        <h4>Press</h4>
      </a>
      <a href="https://www.instagram.com/under.design/" target="_blank">
      <h4>Instagram</h4>
    </a>
    </div>
    <div class="direction-row">
      <a href="https://store.weareunder.design/pages/newsletter" target="_blank">
        <h4>Newsletter</h4>
      </a>
      <a href="mailto:hello@weareunder.design">
        <h4>Contact</h4>
      </a>
    </div>
  </div>
  `;

  class UnderFooter extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = TEMPLATE;
    }
  }
  customElements.define("under-footer", UnderFooter);
}

function addMetaImage() {
  const getCurrentPage = window.location;
  const imageUrl = getCurrentPage.origin + getCurrentPage.pathname + "0.png";
  const metaImage = document.createElement("meta");
  metaImage.setAttribute("property", "og:image");
  metaImage.setAttribute("content", imageUrl);

  document.head.appendChild(metaImage);
}

addFooter();
addMetaImage();
