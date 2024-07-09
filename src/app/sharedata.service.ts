import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class SharedataService {
   
  
   b_s_bussiness=new BehaviorSubject<any>(null);//owners data

   c_s_cakes=new BehaviorSubject<any>(null);//cake data

   o_s_order=new BehaviorSubject<any>(null);//order


  private locationUrl='/assets/Database.json';

  list:any;

  constructor(private http:HttpClient) { }

  getLocation():Observable<any>{
    return this.http.get<any>(this.locationUrl);
  }
  
  getvendors(){
    return this.b_s_bussiness;
  }

  getCake(){
    return this.c_s_cakes;
}

  getOrder(){
    return this.o_s_order;
  }

  //create method that perform button click action
  mymethod1(businesses:string):void
  {
    this.b_s_bussiness.next(businesses)

  }


  //fetch cake data 
  mymethod2(cakes:any):void
{
  this.c_s_cakes.next(cakes)
  
}

mymethod3(order:any):void
{
  this.o_s_order.next(order)
}
}


function getBusiness() {
  throw new Error('Function not implemented.');
}



