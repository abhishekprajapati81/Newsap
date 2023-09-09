import { Component,OnInit } from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit{

  constructor(private _service:NewserviceService){}
  tophedingdisaply:any=[];
  ngOnInit(): void {
      this._service.topheding().subscribe((result)=>{
      console.log(result);
      this.tophedingdisaply = result.articles;
      })
  }

}
