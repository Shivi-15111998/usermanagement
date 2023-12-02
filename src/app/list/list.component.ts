import { Component, OnInit } from '@angular/core';
import { ListdataService } from '../listdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listdata: any = [{}];
  constructor(private listservice:ListdataService)
  {}
  ngOnInit(): void {
   
 this.listservice.getlist().subscribe((data)=>
 {
  console.log(data)
  this.listdata=data;
 })
  }
  deleteuser(dataid:any){
  this.listservice.delete(dataid).subscribe((data)=>{
   console.log(data)
  })
  this.listservice.getlist().subscribe((data)=>
 {
  console.log(data)
  this.listdata=data;
 })
  }
  update(id:any){

  }
 
}
