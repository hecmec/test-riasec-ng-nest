import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-profile-result',
  templateUrl: './profile-result.component.html',
  styleUrls: ['./profile-result.component.scss'],
})
export class ProfileResultComponent implements OnInit {
  @Input() public topCateoryLabels: string[] = [];
  @Output() public tryAgainClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Emit click event
   */
  public tryAgainButtonClicked() {
    this.tryAgainClicked.emit();
  }
}
