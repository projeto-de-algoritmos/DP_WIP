import { Component } from '@angular/core';
import { AnswerType } from 'src/algorithm/AnswerType';
import { SubsequenceCalculator } from 'src/algorithm/SubsequenceCalculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dp';
  sequenceCalculator = new SubsequenceCalculator();
  randomList?: number[]
  answers!: AnswerType;
  randomSubsequenceSize = 0;
  buttonDisapear = true;
  answersOptions?: number[]

  getRandomList() {
    this.buttonDisapear = false;
    this.randomList = this.sequenceCalculator.generateRandomArraySequence();
    this.randomSubsequenceSize = this.sequenceCalculator.generateRandomSubsequenceSize();
    this.answers = this.sequenceCalculator.calculateAnswers(this.randomList, this.randomSubsequenceSize);
    this.answersOptions = Object.values(this.answers);
  }
}



