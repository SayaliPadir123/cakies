import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent implements OnInit {

  vendors: any;
  selected: any;
  selectedList: any;
  selectedCity: any;
  var: any;
  cake: any[] = [];
  list: any;

  sub2: any;
  selectedOrder: any;



  constructor(private sharedataService: SharedataService, private router: Router, private http: HttpClient) { }

  ngOnInit() {

    console.log("???????/ in ngOnInit............")

    this.sub2 = this.sharedataService.getCake().subscribe((data) => {
      this.cake = data; //show database

      // this.cake=this.sharedataService.list;s

      console.log("????????????? in subscribe")


      //   console.log(this.cake+"list");
    }

    );
    
  }

  method3(order:any):void{
    console.log("in method3")

    console.log(order)

    this.sharedataService.mymethod3(order);
    this.selectedOrder=order;
    this.sharedataService.getOrder().subscribe(
      
    );
    this.router.navigate(['/order']);
  }

}



// this.router.navigate(['/cake']); //routing method


// }






