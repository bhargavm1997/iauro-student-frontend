import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import{RouterModule} from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { HeaderComponent } from './dashboard/header/header.component';
import{HttpClientModule} from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentService } from './student.service';  
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentListComponent,
    NavigationComponent,
    HeaderComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    ToastrModule.forRoot(),
  BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot([
      {path:"",component:StudentListComponent},
     {path:"student/list",component:StudentListComponent}
    ])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
