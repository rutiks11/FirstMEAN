import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  messege : any;
  
  constructor(private service : MarvellousService)
  { }

  ngOnInit(): void {
   this.service.getBatches().subscribe(data=>
    {
      this.messege = data;
    }) 
  }


  
  
  @Output() public Myevent = new EventEmitter();

  public SendMessege() : any
  {
    this.Myevent.emit(this.messege);
  }



}
