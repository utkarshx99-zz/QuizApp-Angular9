import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz-display', component: QuizDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
