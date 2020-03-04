import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from '../share.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {

  answerOptions = ['ABCD'];

  answer = '';

  public shares: Observable<any[]>;
  public users: Observable<any[]>;
  constructor(private shareservice: ShareService, private userservice: UserService) { }

  ngOnInit() {
    this.shares = this.getShares('/shares');
    this.users = this.getUsers('/user');
  }
  getShares(path) {
    return this.shareservice.getShares(path);
  }

  getUsers(path) {
    return this.userservice.getUsers(path);
  }
  onAnswerInput(value: string) {
    this.answer = value;
  }

}
