import {
  Component,
  EventEmitter,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { QuestionItem } from '../common/question.interface';
import { Constants } from '../common/constants.class';
import { DataService } from '../data-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-question-checkbox-list',
  templateUrl: './question-checkbox-list.component.html',
  styleUrls: ['./question-checkbox-list.component.scss'],
})
export class QuestionCheckboxListComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Output()
  selectionValidated = new EventEmitter<string[]>();

  questionList: QuestionItem[] = [];

  destroyed$: Subject<void> = new Subject<void>();

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  /**
   * component is destroyed
   * Trigger next on destroyed subject to auto unsubscribe.
   */
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  fetchQuestions() {
    return this.dataService
      .getQuestions()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res: {}) => {
        this.questionList = res as QuestionItem[];
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.debug('ngOnChanges');
  }

  /**
   * Resets all selection to empty
   */
  private removeSelection() {
    this.questionList = this.questionList.map((quest) => {
      quest.IsSelected = false;
      return quest;
    });
  }

  /**
   * Gets a list of QuestionItems that the user has selected
   * @returns array of QuestionItems
   */
  public getSelectedItems() {
    return this.questionList.filter((item) => item.IsSelected);
  }

  /**
   * Returns the top two selected riasec category labels
   * @returns
   */
  public getTopTwoCategoyLabels() {
    return this.getTopLabelsOfList(this.getSelectedItems(), 2);
  }
  /**
   * Gets an array of the top n Riasec category names in the given list
   * @param questionList: list of question items
   * @param limit: max number of labels to return
   * @returns
   */
  private getTopLabelsOfList(
    questionList: QuestionItem[],
    limit: number = 2
  ): string[] {
    let result: string[] = [];

    if (questionList) {
      const codeCounterMap: Map<string, number> =
        this.getCodeCounterMap(questionList);

      const mapEntries = Array.from(codeCounterMap.entries());

      result = mapEntries
        .sort((first, second) => {
          return second[1] - first[1];
        })
        .slice(0, limit)
        .map((item) => {
          const code = item[0];
          const name: string = this.getLabelForRiaCode(code);
          return name;
        });
    }
    return result;
  }

  /**
   * Gets the label for the riasecCode
   * @param riasecCode
   * @returns
   */
  private getLabelForRiaCode(riasecCode: string): string {
    let result: string = '';
    if (riasecCode in Constants.riasecMapping) {
      result = Constants.riasecMapping[riasecCode];
    }
    return result;
  }

  /**
   * Gets a map from RiaCodes to their number of occurances in the question list
   * @param questionList : list of QuestionItems
   * @returns A map from codes to occurance count
   */
  private getCodeCounterMap(questionList: QuestionItem[]): Map<string, number> {
    let result: Map<string, number> = new Map<string, number>();

    if (questionList) {
      return questionList.reduce(
        (counterMap: Map<string, number>, currentQuestion: QuestionItem) => {
          let currentCodeCount: number =
            counterMap.get(currentQuestion.Code) || 0;
          currentCodeCount++;
          counterMap.set(currentQuestion.Code, currentCodeCount);
          return counterMap;
        },
        new Map<string, number>()
      );
    }

    return result;
  }

  /**
   * User clicked on validate button
   * We send our top categories to the parent
   */
  public btnValidateClicked() {
    this.selectionValidated.emit(this.getTopTwoCategoyLabels());
  }
}
