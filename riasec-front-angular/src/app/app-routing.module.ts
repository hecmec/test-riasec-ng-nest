import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCheckboxListComponent } from './question-checkbox-list/question-checkbox-list.component';

const routes: Routes = [
  // { path: '', component: QuestionCheckboxListComponent }
  // { path: 'question-list', component: QuestionCheckboxListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
