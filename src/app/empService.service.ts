export class EmpService
{
    emp=[ 
        {id:"EV6789", name:"Prakash",age:"29",location:"Chennai", designation:"Software Developer",salary:"50000"}
    ]
    
    //updating the emp list with registered employee information
    AddNewUser(id: string, name: string,age: string, location: string, designation: string,salary: string) {
        this.emp.push({ id:id, name:name, age:age, location:location, designation:designation, salary:salary });
        console.log(this.emp)
    }
}