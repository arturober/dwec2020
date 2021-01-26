import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  image: string;

  constructor() { }

  ngOnInit() {}

  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.image = photo.dataUrl;
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    });

    this.image = photo.dataUrl;
  }

}
