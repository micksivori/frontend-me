import { Component, OnInit } from '@angular/core';
import { Data } from './models/data';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/Common/http';
// import { DatePipe } from '@angular/common'; //import do datePipe


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [DatePipe] //DatePipe como provider

})

export class AppComponent implements OnInit{
  title = 'Ordem De Servicos';
  data: Data | undefined;
  public isCollapsed = false;
  
  constructor(private dataservice: DataService, 
    private http: HttpClient)
    // private datePipe: DatePipe)
    {

  }
  ngOnInit(): void {

    this.dataservice.getData().then((res) => {
      console.log(res)
      this.data = res;
    }).catch(rr =>{
      console.error(rr)
    })

    this.http.get<Data>("./app/models/data.ts").subscribe
    (_resA => {
      console.log(_resA)
      this.data = _resA;
    })
    
    // this.datePipe.transform({{data.dataAddresses}}, 'dd/MM/yyyy')
  }

}
