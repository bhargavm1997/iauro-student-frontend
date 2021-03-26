import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';  
import { StudentData } from '../student';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns = ['name', 'gender', 'address','mobile number','action'];

  dataSource:StudentData[]
  name:String
  gender:any
  address:string
  studentData:any
  mobileNumber:string
  genders=["Male","Female"]

  constructor(private studentService : StudentService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(){

    this.studentService.getStudents().subscribe(data =>
      {
        this.dataSource = data["data"]
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
          alert("Student added successfully")
          setTimeout(() => {
            window.location.reload();   
          }, 1000);
        }
      })
  }

  deleteStudent(studentData)
  {
    this.studentService.deleteStudent(studentData).subscribe(
      data=>{
        if(data["status"]==200)
        {
          alert("Student deleted successfully")
          setTimeout(() => {
            window.location.reload();   
          }, 1000);

        }
      })
  }
 


  
 
}


