import { Component, OnInit } from '@angular/core';
// import  sports  from  '../../data/Sports.json';
// import music from '../../data/Music.json';
// import node from '../../data/Node.js.json';
import {HomepageComponent} from '../homepage/homepage.component';
import {TopicServiceService} from '../topic-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  option: string;
  data: any;
  username: string;
  url='http://localhost:8081/quiz/'; //PORT 8081
  timeLeft: number = 60;
  counter:number=0;

  ngOnInit(): void {
    this.service.optionObservable.subscribe(update =>this.option = update);
    this.service.usernameObservable.subscribe(update =>this.username = update);
  }
  
  q:string;
  opt1:string;
  opt2:string;
  opt3:string;

  i:number = 0;
  correctCount:number = 0 ;
  incorrectCount:number = 0 ;
  index:number;
 
 
constructor(private http: HttpClient, private router: Router, private service: TopicServiceService) {}


public startTimer(){
  
     function timeIt(){
       this.counter++;
       
     }

     setInterval(timeIt,1000);

  }


public start(){
  if(this.option=='Sports'){
    //this.data = sports;
    //console.log(this.data[0]);
    this.url += `sport`;
    this.http.get(this.url).toPromise().then((data:any) => {
      //response from the server
      console.log(data+"@@@@@@@@@@@@@@@@@@@@@");
      //this.data = JSON.stringify(data.json);
      this.data = data;
      this.generate(0);
    // this.startTimer();
    });
  }
  else if(this.option=='Music'){
    //this.data = music;
    this.url += `music`;
    this.http.get(this.url).toPromise().then((data:any) => {
      //response from the server
      console.log(data);
      //this.data = JSON.stringify(data.json);
      this.data = data;
      this.generate(0);
     // this.startTimer();
    });
  }
  else if(this.option=='Node.js'){
    //this.data = node;
    this.url += `nodejs`;
    this.http.get(this.url).toPromise().then((data:any) => {
      //response from the server
      console.log(data);
      //this.data = JSON.stringify(data.json);
      this.data = data;
      this.generate(0);
    //  this.startTimer();
    });
  }
  else{
    this.router.navigate(['/homepage']);    
  }

  //Send http request
  document.getElementById("qp").style.visibility= "visible";
  document.getElementById("start").style.visibility= "hidden";
  
}

 public generate(index:number) {
   
    if(index<this.data.length-1){
      document.getElementById("btn-next").style.visibility= "visible";
      document.getElementById("btn-submit").style.visibility= "hidden";
      }
    
      if(index==this.data.length-1){
        document.getElementById("btn-next").style.visibility= "hidden";
        document.getElementById("btn-submit").style.visibility= "visible";
       
      }

    const ele1 = document.getElementById("optt1") as HTMLInputElement;
    const ele2 = document.getElementById("optt2") as HTMLInputElement;
    const ele3 = document.getElementById("optt3") as HTMLInputElement;
    ele1.innerHTML = this.data[index].opt1;
    ele2.innerHTML = this.data[index].opt2;
    ele3.innerHTML = this.data[index].opt3;
    document.getElementById("qnum").innerHTML=this.data[index].qnum;
    document.getElementById("q").innerHTML = this.data[index].q;

}

public checkAnswer() {
  const ele1 = document.getElementById("opt1") as HTMLInputElement;
  const ele2 = document.getElementById("opt2") as HTMLInputElement;
  const ele3 = document.getElementById("opt3") as HTMLInputElement;

    if (ele1.checked && this.data[this.i].opt1 == this.data[this.i].answer) {
       this.correctCount++;          
       
    }
    if (ele2.checked && this.data[this.i].opt2 == this.data[this.i].answer) {
        this.correctCount++;
        
    }
    if (ele3.checked && this.data[this.i].opt3 == this.data[this.i].answer) {
        this.correctCount++;
        console.log(this.correctCount)
        
    }
    else{
      
    }
    // increment i for next question
    this.i++;
    if(this.data.length-1 < this.i){
      this.incorrectCount = (this.data.length-this.correctCount);
      
      this.service.changescore(this.correctCount,this.incorrectCount);
      this.router.navigate(['/resultpage']);
      
      }

    else{
      
    // callback to generate
    this.generate(this.i);
    }

    ele1.checked=false;
    ele2.checked=false;
    ele3.checked=false;

}


logout(){
  this.router.navigate(['/login']);
  }

}