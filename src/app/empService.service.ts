export class EmpService
{
    emp=[ 
        {name:"Vijay", id:"19IT05",age:"21",location:"Chennai", designation:"Software Developer",salary:"50000"}
    ]
    
    //updating the emp list with registered employee information
    AddNewUser(name: string,id: string,age: string, location: string, designation: string,salary: string) {
        this.emp.push({ name: name, id:id,age:age,location:location,designation:designation,salary:salary });
        console.log(this.emp)
    }
}