import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import questionDataJson from '../assets/riasec-questions.json';
import { QuestionItem } from './common/question.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  questionList: QuestionItem[] = questionDataJson;
  // endpoint = '/api';
  endpoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getQuestionListJson(): QuestionItem[] {
    return this.questionList;
  }

  getQuestions(): Observable<QuestionItem> {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .get<QuestionItem>(this.endpoint + '/riaquestions', {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.error(message);
    return throwError(message);
  }
}
