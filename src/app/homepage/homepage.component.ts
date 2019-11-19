import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TopicServiceService} from '../topic-service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  constructor(private router: Router, public service: TopicServiceService) { }

  public option: string;
  username: string;

data = [
{id: 0, name: 'Node.js'},
{id: 1, name: 'Sports'},
{id: 2, name: 'Music'}
];

loadQuiz(topic:string){
  this.option = topic;
  if(this.option == undefined ){
    alert('Please choose the topic to proceed');
      this.router.navigate(['/homepage']);
        
  }
  else{
  alert('You have selected ' + this.option + ' topic');
  this.service.changeOption(this.option);
  this.router.navigate(['/quizpage']);
  }
  }
   
  ngOnInit() {
    this.service.usernameObservable.subscribe(update =>this.username = update);
  }
  logout(){
    this.router.navigate(['/login']);
    }

}
