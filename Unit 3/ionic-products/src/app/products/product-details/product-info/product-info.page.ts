import { Component, OnInit, Host, forwardRef, Inject } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { AlertController, NavController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';
import { ProductDetailsPage } from '../product-details.page';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss']
})
export class ProductInfoPage implements OnInit {
  product: Product;

  constructor(
    private alertCrl: AlertController,
    private productService: ProductService,
    private nav: NavController,
    @Inject(ProductDetailsPage) private parentComponent: ProductDetailsPage
  ) {}

  ngOnInit() {
    this.parentComponent.product$.subscribe(
      product => this.product = product
    );
  }

  async delete() {
    const alert = await this.alertCrl.create({
      header: 'Delete product',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.productService
              .deleteProduct(this.product.id)
              .subscribe(() => this.nav.navigateBack(['/products']));
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }
}
