import { Component, OnInit } from '@angular/core';
import {TopicServiceService} from '../topic-service.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-resultpage',
templateUrl: './resultpage.component.html',
styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {
correct: number;
incorrect: number;
    username: string;

constructor(private router: Router, private service: TopicServiceService) { }

ngOnInit(): void {
this.service.correctObservable.subscribe(update =>this.correct = update);
this.service.incorrectObservable.subscribe(update =>this.incorrect = update);
this.service.usernameObservable.subscribe(update =>this.username = update);
}
retakeQuiz(){
this.router.navigate(['/homepage']);
}
logout(){
this.router.navigate(['/login']);
}

}