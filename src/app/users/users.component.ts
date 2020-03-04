import { FormGroup, FormBuilder } from '@angular/forms';
import { UserDisplayService } from './../user-display.service';
import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  constructor(private userservice: UserDisplayService, private uf: FormBuilder) {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.uf.group({
      username: '',
      emailid: ''
    });
  }
  addUser(username, emailid) {
    const dataObj = { username, emailid };
    this.userservice.addUser(dataObj);
  }

  ngOnInit(): void {
  }

}
