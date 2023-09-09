import { Component,OnInit } from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-gamenews',
  templateUrl: './gamenews.component.html',
  styleUrls: ['./gamenews.component.css']
})
export class GamenewsComponent implements OnInit{

  constructor(private _service:NewserviceService){}
  sport:any=[];
  ngOnInit(): void {
     this._service.sportnew().subscribe((reslt)=>{
    this.sport = reslt.articles;
    })
  }
}
