import { Component } from '@angular/core';

enum pageMode {
  Question = 'question',
  Answer = 'answer',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'riasec-front-angular';
  topCateoryLabels: string[] = [];
  public pageMode: string = pageMode.Question;

  constructor() {}

  public selectionValidatedHandler(resultList: string[]) {
    this.topCateoryLabels = resultList;
    this.pageMode = pageMode.Answer;
  }

  public userTryAgainHandler() {
    this.tryAgain();
  }

  public tryAgain() {
    this.pageMode = pageMode.Question;
    this.topCateoryLabels = [];
  }
}
