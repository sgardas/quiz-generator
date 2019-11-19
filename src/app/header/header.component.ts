import { Component, OnInit } from '@angular/core';
import { TopicServiceService } from '../topic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;

  constructor(private router: Router, public service: TopicServiceService, ) { }

  ngOnInit() {
    this.service.usernameObservable.subscribe(update =>this.username = update);
  }
  logout(){
    this.router.navigate(['/login']);
    }

}
