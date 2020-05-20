import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './Components/quiz/quiz.component';
import { QuizDisplayComponent } from './Components/quiz-display/quiz-display.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz-display', component: QuizDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
