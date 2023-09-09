import { Component,OnInit } from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  constructor(private _service:NewserviceService) {}
  politics:any=[]
  ngOnInit(): void {
      this._service.applenewss().subscribe((result)=>{
      this.politics=result.articles;
      })
  }
}
