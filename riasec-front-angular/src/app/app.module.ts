import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCheckboxListComponent } from './question-checkbox-list/question-checkbox-list.component';
import { ProfileResultComponent } from './profile-result/profile-result.component';

@NgModule({
  declarations: [AppComponent, QuestionCheckboxListComponent, ProfileResultComponent],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
