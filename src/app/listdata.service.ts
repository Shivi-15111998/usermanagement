import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {

  constructor(private http: HttpClient) { }
  url:string="http://localhost:3000/users"




  getlist(){
    return this.http.get(this.url)
  }
  add_data(data:any){
    
  return this.http.post(this.url,data)
  }
  delete(data:any){
    return this.http.delete(`${this.url}/${data}`)
  }
  updateuser(id:any){
    return this.http.get(`${this.url}/${id}`)

  }
  saveupdatedata(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
