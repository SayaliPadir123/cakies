import { Component, OnInit } from '@angular/core';
import { SharedataService } from './sharedata.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
location="location";
city="Business";

database:any;
  vendors:any=[];
  selectedCity:any=[];
  selectedList:any=[];


constructor(private sharedataService:SharedataService, private  router : Router){}

ngOnInit(): void {
  this.sharedataService.getLocation().subscribe ((data)=>{
      this.database=data; 
    }
  );
}


//method which calls service method 
//button click
method1(businesses:string):void{
  
 console.log(businesses)
 this.sharedataService.mymethod1(businesses)
 this.router.navigate(['/vendor'])
 }
}


  



//   this.sharedataService.getCake().subscribe(
//     (data: any)=>{
//     let index = this.database.location.businesses.findIndex(
//       (loc: { city: string; }) => loc.city === this.list);
   
//       if (index !== -1) {
//       this.vendors = this.database.location.businesses[index];
//       console.log('cake List', this.list);
//     }
//     this.database=data;
//  }
// );