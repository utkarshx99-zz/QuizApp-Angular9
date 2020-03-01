import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

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
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addShare(name, price) {
     const dataObj = {
      name: name,
      price: price
    };
    this.shareservice.addShare(dataObj);
  }

  ngOnInit(): void {
  }

}
