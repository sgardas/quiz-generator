import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { ResultpageComponent } from './resultpage/resultpage.component';

const appRoutes: Routes=[

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'homepage',component: HomepageComponent},
  {path:'quizpage',component: QuizpageComponent},
  {path: 'resultpage', component: ResultpageComponent}


]



@NgModule({

  imports: [
         RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModuleModule { }
