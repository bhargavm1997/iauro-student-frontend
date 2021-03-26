import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  name:String
  gender:any
  address:string
  mobileNumber:string 
  id:any
  studentData: any
  genders=["Male","Female"]

  constructor(private studentService : StudentService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.studentService.getStudent(this.id).subscribe(
      data => {
        if(data["status"]==200)
        {
          this.studentData = data["data"]
        }
       
      })

  }

  editStudent()
  {
    let editStudent = {
      studentId: this.studentData.studentId,
      name: this.studentData.name,
      address: this.studentData.address,
      mobileNumber:this.studentData.mobileNumber,
      gender:this.studentData.gender
    }

    this.studentService.editStudent(editStudent).subscribe(data => {
      if (data["status"] == 200) {
        alert("Student updated successfully")
        setTimeout(() => {
          this.router.navigate(["/student/list"])
        }, 1000);
      }
    })
  }
  back()
  {
    this.router.navigate(["/student/list"])

  }


}
