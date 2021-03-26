import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { StudentData } from './student';  

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url : string ='http://localhost:3000/student';  

  constructor(private http: HttpClient) { }

  getStudents() : Observable<StudentData[]>{  
    return this.http.get<StudentData[]>(this.url);  
  }

  addStudent(data): Observable<any> {
    return this.http.post<StudentData>(this.url+"/add", data)
  }

  deleteStudent(data):Observable<any>{
    return this.http.delete<StudentData>(this.url+"/delete?id="+data.studentId)

  }

  editStudent(data):Observable<any>{
    return this.http.put<StudentData>(this.url+"/edit?id="+data.studentId,data)

  }
  getStudent(id):Observable<any>{
    return this.http.get<StudentData>(this.url+"/get?id="+id)

  }
}
