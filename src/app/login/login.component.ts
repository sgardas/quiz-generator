import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {TopicServiceService} from '../topic-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  userdetform=new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});
  errormsg:string;
 // url:'http:/localhost:8081/';

constructor(private router: Router, public service: TopicServiceService) { }


public onLoginClick()
{
console.log('keerthi');
console.log(this.userdetform.get('username').value);
//this.url += 'login';
let loginJson={
  user:this.userdetform.get('username').value,
  pass:this.userdetform.get('password').value
}
this.service.mymet(loginJson).subscribe(data => {

 if(data.status==="success"){
  console.log(data);
  this.service.changeusername(this.userdetform.get('username').value);
   this.router.navigate(['/homepage']);
 }else{

  console.log(data);
  //alert('please enter valid credentials');
  this.errormsg="Invalid username or password";
 }
});



/*public onLoginClick2()
{
  //console.log('keerthi');
  //console.log(this.userdetform.get('username').value);
   for(let i in data)
   {
     //console.log(typeof(parseInt(i))+'******************')
     //console.log(i+'@@@@@@@@'+ +' '+this.userdetform.get('username').value+ data[i].username);
    if(this.userdetform.get('username').value== data[i].username && this.userdetform.get('password').value == data[i].password)
    {
        //console.log('logged in');
        this.service.changeusername(this.userdetform.get('username').value);
        this.router.navigate(['/homepage']);
        break;
    }

    if(parseInt(i)<= data.length){

      alert('Please enter valid credentials');

    }

      
}*/


} 

}
