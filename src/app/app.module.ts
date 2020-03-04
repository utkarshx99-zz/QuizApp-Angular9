import { UserDisplayService } from './user-display.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { RouterModule } from '@angular/router';
import { ShareService } from './share.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    QuizComponent,
    QuizDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'quiz-display', component: QuizDisplayComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [ShareService, UserDisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
