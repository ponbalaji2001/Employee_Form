import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { EmpService } from './empService.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FormApp';
  constructor(private empServ: EmpService){}
  name='';
  id='';
  age='';
  location='';
  designation='';
  salary='';

  Employee:{
    name: String,
    id: String,
    age: String,
    location: String,
    designation: String,
    salary: String }[]=[]

  ngOnInit() :void{
     this.Employee=this.empServ.emp;
  };
  
  //Add employee details to the service.
  AddUser(){
    this.empServ.AddNewUser(this.name,this.id, this.age,this.location,this.designation,this.salary);
  }
}
