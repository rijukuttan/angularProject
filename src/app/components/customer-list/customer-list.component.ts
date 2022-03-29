import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
 
 departmentData = {} as any;




constructor(private api:ServicesService) {}
//departmentData =null;
ngOnInit() {
  
  this.api.getdepartment().subscribe((data)=>{
  this.departmentData = data;
});
}

}
