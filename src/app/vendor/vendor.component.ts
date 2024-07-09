import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent implements OnInit {

  list = "cake";
  database: any;

  selectedCity:any=[];
  vendors: any[]=[];

  sub:any;
  selectedList: any;
  

  constructor(private sharedataService: SharedataService,private http :HttpClient,private router :Router) { }


  ngOnInit() {
    console.log(" ???????????????????????    in ngoninit ---------------------------------")

    this.sub= this.sharedataService.getvendors().subscribe((data)=>{
      this.vendors=data

      console.log(" ???????????????????????    in subscribe")
    } );
  //  this.vendors= this.sharedataService.businesses
}


method2(cake: any): void {
  // console.log("selected owner:", list);
  console.log("in method2")

  console.log(cake)

  this.sharedataService.mymethod2(cake);
  this.selectedList=cake;
  this.sharedataService.getCake().subscribe(
    
  );

  // this.sharedataService.method2(list);

  this.router.navigate(['/cake']);   //routing
}
 }





























      // //create method 
      // method2(list: any): void {
      //   console.log("selected owner:", list);

      //   this.sharedataService.method2(list);

      //   this.router.navigate(['/cake']);   //routing
      // }
    // }
  