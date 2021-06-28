import { Component, Input, OnInit } from '@angular/core';
import { supplier } from 'src/app/models/data';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() supplier: supplier | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
