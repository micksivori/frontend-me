import { Component, Input, OnInit } from '@angular/core';
import { address } from 'src/app/models/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() address: address | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
