import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { ToastController, NavController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {
  newProd: Product = {
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(
    private productService: ProductService,
    private toastCtrl: ToastController,
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.addProduct(this.newProd).subscribe(
      async prod => {
        (await this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Product added succesfully',
          color: 'success'
        })).present();
        this.nav.navigateRoot(['/products']);
      },
      async error => (await this.toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: 'Error adding product'
      })).present()
    );
  }

  async takePhoto() {;
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProd.imageUrl = photo.dataUrl;
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProd.imageUrl = photo.dataUrl;
  }

}
