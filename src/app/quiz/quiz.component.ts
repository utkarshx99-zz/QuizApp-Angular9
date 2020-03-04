import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      q1 : ['', Validators.required ],
      q1ch1: ['', Validators.required ],
      q1ch2: ['', Validators.required],
      q1ch3: ['', Validators.required],
      q1ch4: ['', Validators.required],
      q1correctOption: ['', Validators.required],
      q2: ['', Validators.required],
      q2ch1: ['', Validators.required],
      q2ch2: ['', Validators.required],
      q2ch3: ['', Validators.required],
      q2ch4: ['', Validators.required],
      q2correctOption: ['', Validators.required],
      q3: ['', Validators.required],
      q3ch1: ['', Validators.required],
      q3ch2: ['', Validators.required],
      q3ch3: ['', Validators.required],
      q3ch4: ['', Validators.required],
      q3correctOption: ['', Validators.required],
      q4: ['', Validators.required],
      q4ch1: ['', Validators.required],
      q4ch2: ['', Validators.required],
      q4ch3: ['', Validators.required],
      q4ch4: ['', Validators.required],
      q4correctOption: ['', Validators.required],
      q5: ['', Validators.required],
      q5ch1: ['', Validators.required],
      q5ch2: ['', Validators.required],
      q5ch3: ['', Validators.required],
      q5ch4: ['', Validators.required],
      q5correctOption: ['', Validators.required]
   });
  }
  addQuestion(q1, q1ch1, q1ch2, q1ch3, q1ch4, q1correctOption, q2, q2ch1, q2ch2, q2ch3, q2ch4, q2correctOption,
              q3, q3ch1, q3ch2, q3ch3, q3ch4, q3correctOption,
              q4, q4ch1, q4ch2, q4ch3, q4ch4, q4correctOption,
              q5, q5ch1, q5ch2, q5ch3, q5ch4, q5correctOption) {
     const dataObj = {q1, q1ch1, q1ch2, q1ch3, q1ch4, q1correctOption, q2, q2ch1, q2ch2, q2ch3, q2ch4, q2correctOption,
       q3, q3ch1, q3ch2, q3ch3, q3ch4, q3correctOption,
       q4, q4ch1, q4ch2, q4ch3, q4ch4, q4correctOption,
       q5, q5ch1, q5ch2, q5ch3, q5ch4, q5correctOption
      };
     this.shareservice.addQuestion(dataObj);
  }

  ngOnInit(): void {
  }

}
