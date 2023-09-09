import { Component,OnInit } from '@angular/core';
import { NewserviceService } from '../service/newservice.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit{
constructor(private _service:NewserviceService) {}
apple:any=[];
ngOnInit(): void {
  this._service.applenewss().subscribe((result)=>{
  this.apple = result.articles;
  })
}
}
