import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor (private http:HttpClient) {}
  getdepartment(){
    return this.http.get('http://localhost:51443/api/Employee/GetAllDepartmentNames'); 
    }
}
