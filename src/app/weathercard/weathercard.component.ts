import { Component, OnInit, Input } from '@angular/core';
import { Weather } from './../../structures/weather.structure';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent implements OnInit {
 @Input() weather : Weather;
  constructor() { }

  ngOnInit() {
  }

}
