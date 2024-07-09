import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  
  customerName:string='';
  customerAddress:string='';
  customerPhone='';
  cakeType:string='';
  cakeFlavour:string='';
  cakeSize='';
  specialInstructions:string='';

  sub3:any

  constructor(private sharedataservice: SharedataService,private router:Router,private http:HttpClient){}
  ngOnInit(): void {

    console.log("???????/ in ngOnInit............")

  }

  submitForm(){
    console.log("form submitted..."+this.customerName,this.customerAddress,this.customerPhone,this.cakeType,this.cakeFlavour,this.cakeSize,this.specialInstructions)
  
  this.customerName='';
  this.customerAddress='';
  this.customerPhone='';
  this.cakeType='';
  this.cakeFlavour='';
  this.cakeSize='';
  this.specialInstructions='';

  }

 
}
