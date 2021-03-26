import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';  
import { StudentData } from '../student';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns = ['name', 'gender', 'address','action'];

  dataSource:StudentData[]
  name:String
  gender:any
  address:string
  studentData:any
  mobileNumber:string
  genders=["Male","Female"]
  constructor(private studentService : StudentService) { }

  ngOnInit(){

    this.studentService.getStudents().subscribe(data =>
      {
        this.dataSource = data["data"]
        console.log(this.dataSource)
      }); 
  }

  submit(){
    this.studentData = {
      name: this.name,
      address: this.address,
      mobileNumber:this.mobileNumber,
      gender: this.gender

    }

    this.studentService.addStudent(this.studentData).subscribe(
      data=>{
        console.log(data["status"])
        if(data["status"]==200)
        {
          window.location.reload();

        }
      })
  }

  deleteStudent(studentData)
  {
    console.log(studentData)
    this.studentService.deleteStudent(studentData).subscribe(
      data=>{
        console.log(data["status"])
        if(data["status"]==200)
        {
          
        }
      })
  }
  editStudent(data)
  {
    this.router.navigate(["/student/edit/",data.id])
  }


  
 
}


