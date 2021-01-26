import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full'
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'vibration',
    loadChildren: () => import('./vibration/vibration.module').then( m => m.VibrationPageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () => import('./clipboard/clipboard.module').then( m => m.ClipboardPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'filesystem',
    loadChildren: () => import('./filesystem/filesystem.module').then( m => m.FilesystemPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
