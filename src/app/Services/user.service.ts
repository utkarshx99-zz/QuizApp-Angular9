import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basePath = '/user';
  constructor(private dbs: AngularFireDatabase) { }

  addUser(data) {
    const obj = this.dbs.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
  }

  getUsers(path): Observable<any[]> {
    return this.dbs.list(path).valueChanges();
  }
}
