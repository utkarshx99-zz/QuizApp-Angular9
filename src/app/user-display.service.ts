import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDisplayService {

  private basePath = '/userdisplays';
  constructor(private db: AngularFireDatabase) {}

  addUser(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Sucess');
  }

  getUsers(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

}
