import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ListdataService } from '../listdata.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
adduser=new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),  
  gender: new FormControl(''),
  role: new FormControl(''),
  address: new FormControl(''),
  mobile: new FormControl('')}
)
constructor(private listservice:ListdataService){}
submit(){
this.listservice.add_data(this.adduser.value).subscribe((result)=>{
 console.log(result)

  })
}

}
