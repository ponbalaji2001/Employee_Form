import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { EmpService } from './empService.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FormApp';
  constructor(private empServ: EmpService){}
  name='';
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
  AddUser(form: NgForm){
    const id="E"+this.name[0].toLocaleUpperCase()+Math.floor(1000 + Math.random() * 9000);
    this.empServ.AddNewUser(id, this.name, this.age, this.location, this.designation, this.salary);
    form.resetForm();
  }
}
