import {
  Component,
  EventEmitter,
  HostListener,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { QuestionItem } from '../common/question.interface';
import questionDataJson from '../../assets/riasec-questions.json';
import { Constants } from '../common/constants.class';

@Component({
  selector: 'app-question-checkbox-list',
  templateUrl: './question-checkbox-list.component.html',
  styleUrls: ['./question-checkbox-list.component.scss'],
})
export class QuestionCheckboxListComponent implements OnInit, OnChanges {
  questionList: QuestionItem[] = questionDataJson;

  @Output()
  selectionValidated = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {
    this.removeSelection();
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
  public getTopTwoCateoryLabels() {
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
    limit: number = 1
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
   *
   */
  public validate() {
    this.selectionValidated.emit(this.getTopTwoCateoryLabels());
  }
}
