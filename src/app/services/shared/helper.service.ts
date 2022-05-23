import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async aToast(txt, color, duration: number = 2000) {
    const toast = await this.toastCtrl.create({
      message: txt,
      duration: duration,
      cssClass: `mobo-a-toast-${color}`,
      color: color,
    });
    await toast.present();
  }

  async loading(msg) {
    const isLoading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: msg,
      mode: 'ios',
      cssClass: 'mobo-loading-ctrl',
    });

    return isLoading;
  }
}
