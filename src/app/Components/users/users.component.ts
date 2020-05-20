import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  constructor(private userservice: UserService, private uf: FormBuilder) {
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
