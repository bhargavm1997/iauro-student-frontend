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
    return this.http.delete(this.url+"/delete/"+data.id)

  }

  editStudent(data):Observable<any>{
    return this.http.put(this.url+"/edit/"+data.id,data)

  }
}
