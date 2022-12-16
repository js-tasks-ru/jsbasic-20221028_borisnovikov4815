import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  elem = null;
  name = null;
  price = null;
  category = null;
  image = null;
  id = null;

  constructor(product) {
    this.name = name;
    this.price = price;
    this.category = this.category;
    this.image = image;
    this.id = id;
  }

  template() {
    return `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€<${this.price.toFixed}></span>
    </div>
    <div class="card__body">
        <div class="card__title"><${this.name}></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`
  }
  createElement(html) {
    const temp = document.createElement('div')
    temp.innerHTML = html;
    return temp.firstElementChild;
  }
  render() {
    this.elem = this.createElem(this.template());
    this.elem.addEventListener('click', this.onCardClick)
  }


}
let productCard = new ProductCard(product);
productCard.elem;


const button = elem.querySelector('.card__button');
button.addEventListener('click', () => {

  new CustomEvent("product-add", {
    detail: this.product.id,
    bubbles: true,
  });
  elem.dispatchEvent(button);

});