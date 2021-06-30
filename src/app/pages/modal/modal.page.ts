import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  async mostrarModal() {
    const modal = await this.modal.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Santiago',
        pais: 'Colombia',
      },
    });
    await modal.present();
    /*El on will did mis se ejecuta justo en el
    momento que se esta ejecutando el salir mientras que
    el on DIDMISS se ejecuta cuando lae completamente del modal*/
    const { data } = await modal.onDidDismiss();
    console.log('OnDidDisMiss');
    console.log(data);
    console.log(JSON.stringify(data));
  }
}
