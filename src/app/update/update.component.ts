import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ListdataService } from '../listdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit{
  updateuser=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),  
    gender: new FormControl(''),
    role: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl('')}
  )
  constructor(private listservice:ListdataService,private router:ActivatedRoute){

  }
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.listservice.updateuser(this.router.snapshot.params['id']).subscribe((data:any)=>
 {
  //console.log(data)
  this.updateuser=new FormGroup({
    name: new FormControl(data['name']),
    email: new FormControl(data['email']),  
    gender: new FormControl(data['gender']),
    role: new FormControl(data['role']),
    address: new FormControl(data['address']),
    mobile: new FormControl(data['mobile'])}
  )
  
 })
  }
  updatedata(){
  this.listservice.saveupdatedata(this.router.snapshot.params['id'],this.updateuser.value).subscribe(((data: any)=>{
    console.log(data)
  }))
  }
}
