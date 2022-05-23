import { Component, OnInit } from '@angular/core';
import { cart } from '../../services/data/data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  quantity = 1;
  products = [
    {
      category: 'Jackets',
      color: 'green',
      description:
        'Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rmus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      fav: false,
      featuredImage: '../../../assets/images/product4.jpeg',
      link: 'product-show',
      price: 120,
      quantity: 2,
      selectedSize: 'm',
      sizes: ['m', 'xl'],
      slug: 'parturient-commodo',
      title: 'Parturient Commodo',
    },
  ];
  constructor() {}

  ngOnInit() {
    this.products = [...this.products, ...cart];
  }

  increaseQty(product) {
    return (product.quantity = ++product.quantity);
  }

  decreaseQty(product) {
    if (product.quantity == 1) return;
    return (product.quantity = --product.quantity);
  }

  deleteFromCart(slug) {
    this.products = this.products.filter((product) => {
      return product.slug != slug;
    });
  }

  format(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', <any>{
      style: 'currency',
      currency: currency,
      currencySign: 'accounting',
      signDisplay: 'auto',
    }).format(value);
  }
}
