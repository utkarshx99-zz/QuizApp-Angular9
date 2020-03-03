import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {

  answerOptions = ['ABCD'];

  answer = '';

  public shares: Observable<any[]>;
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/shares');
  }
  getShares(path) {
    return this.shareservice.getShares(path);
  }

  onAnswerInput(value: string) {
    this.answer = value;
  }

}
