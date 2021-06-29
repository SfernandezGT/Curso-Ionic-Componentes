
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[] = Array(20);
  /* eslint-disable @typescript-eslint/member-ordering */
  @ViewChild( IonInfiniteScroll ) infscroll: IonInfiniteScroll;
  constructor() {}

  ngOnInit() {}

  loadData(event) {
    setTimeout(() => {

      if(this.data.length > 50){
        this.infscroll.complete();
        this.infscroll.disabled = true;
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      //event.target.complete();
      this.infscroll.complete();
    }, 1500);
  }
}
