import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
//import {PopupModule} from 'ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    QuizpageComponent,
    ResultpageComponent,
    HeaderComponent,
    FooterComponent,
   // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //PopupModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
