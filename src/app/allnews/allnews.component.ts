import { Component,OnInit } from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})

export class AllnewsComponent implements OnInit {

  constructor(private _service:NewserviceService) {}
  teachnewsdislay:any=[];
  ngOnInit(): void {
      this._service.teachnews().subscribe((result)=>{
      this.teachnewsdislay =  result.articles;
      })
  }
}
