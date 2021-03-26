import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  editStudent(data)
  {

  }


}
