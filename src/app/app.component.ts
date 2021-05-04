import { Component } from '@angular/core';
import { AnswerType } from 'src/algorithm/AnswerType';
import { SubsequenceCalculator } from 'src/algorithm/SubsequenceCalculator';
import Swal from 'sweetalert2';

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

  cardSelect(numberSelect: Number) {
    if (numberSelect == this.answers.correctValue) {
      Swal.fire({
        icon: 'success',
        title: 'Parabéns!',
        text: 'Você conseguiu acertar o total de subsequências!'
      }).then(() => {
        window.location.reload();
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Não foi dessa vez',
        text: 'Você não conseguiu acertar o total de subsequências!'
      }).then(() => {
        window.location.reload();
      });
    }
  }
}
