import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { warehouse } from './model/Ware';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  url:string;
  ware:warehouse;
  wareArr:warehouse[];
  constructor(private http: HttpClient) { 
    this.url="http://localhost:5000/warehouses";
    this.ware=new warehouse();
    this.wareArr=[];
  }
  insertwarehouse(ware:warehouse){
   alert( this.http.post<warehouse>(this.url,ware).subscribe());
    return "Product Details Added";
}
updatewarehouse(ware:warehouse){
    this.http.put<warehouse>(this.url+"/"+ware.id,ware).subscribe();
    return "Product Details Updated";
}
deletewarehouse(customerId:number){
  this.http.delete<warehouse>(this.url+"/"+customerId).subscribe();
  return "Product Details Deleted";
}
findwarehouse(customerId:number){
  this.http.get<warehouse>(this.url+"/"+customerId).subscribe(data =>this.ware=data);
  return this.ware;
}
findAllwarehouse(){
  this.http.get<warehouse[]>(this.url).subscribe(data=>this.wareArr=data);
  return this.wareArr;
}
}
