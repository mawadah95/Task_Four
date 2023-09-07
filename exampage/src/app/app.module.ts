import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from 'primeng/button';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbModule } from "primeng/breadcrumb";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageModule } from 'primeng/image';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    
    AppComponent,
    DropdownComponent,
    ExamComponent,
    HomeComponent,
    
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    ImageModule,
    ButtonModule,
    RadioButtonModule,
    BreadcrumbModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
