import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  textoBuscar = '';
  constructor(private dataService: DataService) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  superHeores: Observable<any>;
  ngOnInit() {
    this.superHeores = this.dataService.getHeroes();
  }
  segmentChanged(event) {

    /*if (event.detail.value === 'Todos') {
      return this.textoBuscar= '';
    }*/
    this.textoBuscar = event.detail.value;
    console.log(this.textoBuscar);
  }
}
