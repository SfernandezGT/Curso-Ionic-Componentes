import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() nombre: string;
  @Input() pais: string;
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  salirSinArgumentos() {
    this.modal.dismiss();
  }

  salirConArgumentos(){
    this.modal.dismiss({
      nombre: 'Jackeline',
      pais: 'Guatemala'
    });
  }
}
