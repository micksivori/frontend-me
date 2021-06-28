import { Component, Input, OnInit } from '@angular/core';
import { header } from 'src/app/models/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() header: header | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
