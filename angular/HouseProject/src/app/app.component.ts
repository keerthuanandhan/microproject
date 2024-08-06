import { Component } from '@angular/core';
import { warehouse } from './model/Ware';
import { WarehouseService } from './warehouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HouseProject';

    ware:warehouse;
  result:string;
  productArr:warehouse[];
  flag:boolean;
  
  constructor(private service:WarehouseService){
    this.ware=new warehouse();
    this.result="";
    this.productArr=[];
    this.flag=false;
  }
  insertwarehouse(data:any){
    alert("Test" + data.customerId) ;
    this.ware.id=data.customerId;
    this.ware.productName=data.productName;
    this.ware.qty=data.qty;
    this.ware.loc=data.loc;
    this.ware.shipid=data.shipid;
    this.result=this.service.insertwarehouse(this.ware);
  }
  updatewarehouse(data:any){
    this.ware.id=data.customerId;
    this.ware.productName=data.productName;
    this.ware.qty=data.qty;
    this.ware.loc=data.loc;
    this.ware.shipid=data.shipid;
    this.result=this.service.updatewarehouse(this.ware);
  }
  deletewarehouse(data:any){
    this.result=this.service.deletewarehouse(data.productId);
  }
  findwarehouse(data:any){
    this.ware=this.service.findwarehouse(data.shipId);
    this.result=this.ware.id+" "+this.ware.productName+" "+this.ware.qty+" "+this.ware.loc+" "+this.ware.shipid;
  }
  findAllwarehouse(){
    this.productArr=this.service.findAllwarehouse();
    this.flag=true;
  }
}
