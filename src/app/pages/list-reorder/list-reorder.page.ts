import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes: string[] = ['Superman', 'Acuaman', 'Batman', 'Mujer Maravilla'];
  habilitarMover = true;
  constructor() {}

  ngOnInit() {}

  doReorder(event: any) {
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }

  cambiarMover(){
    // eslint-disable-next-line eqeqeq
    if(this.habilitarMover == true){
      this.habilitarMover = false;
    }else{
    this.habilitarMover = true;
    }
  }
}
