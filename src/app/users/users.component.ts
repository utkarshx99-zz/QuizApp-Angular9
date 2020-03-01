import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   @Input() inputedUsername = '';

  onInput(value: string) {
    this.inputedUsername = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
