import {Component, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

/* https://www.freakyjolly.com/how-to-show-radio-input-listing-in-angular-6/#.X78SshNKiHE*/

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})

export class TrueFalseQuestionComponent implements OnInit {

  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;
  choices = ['true', 'false']
  clickedRadio: any;
  radioVal: string;
  selectedRadio: string;

  constructor() {
    this.clicked();
  }

  // user input will be assigned to question vars
  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}

  // wd 9
  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();

  // when radio is clicked, save its value
  clicked() {
    this.clickedRadio = this.choices.find(choice => choice === this.selectedRadio);
    this.radioVal = JSON.stringify(this.clickedRadio)
    console.log(this.radioVal)
  }

  onItemChange(item) {
    this.clicked();
  }

  grade = () => {
    this.grading = true
  }

  isCorrect = () => {
    return this.question.answer === this.question.correct
    //  bind this to a selection action? if true, then show check etc
  }

  submit() {
    // this.question.answer = JSON.stringify(this.form.value);
    this.answerChange.emit(this.answer);
    this.grade();
    console.log('---------' + this.radioVal)
    console.log('current picked answer is' + this.question.answer)
    console.log('you are ' + this.isCorrect() + 'the answer is' +
      this.question.correct + ' and you answered ' + this.question.answer)
  }

  ngOnInit(): void {

    console.log('---------' + this.radioVal)
    console.log('current picked answer is' + this.question.answer)
    console.log('you are ' + this.isCorrect() + 'the answer is' +
      this.question.correct + ' and you answered ' + this.question.answer)

  }

}


/*
The form builder creates a FormGroup instance.
The form group contains one to many FormControls.
Our single input in this form is our orders radio list input.
 Each control takes a default initial value and a list of one
  to many optional validation rules.
 */
// constructor(private formBuilder: FormBuilder) {
//   this.form = this.formBuilder.group({
//     choices: ['']
//   });
// mimic async orders
// of(this.getOrders()).subscribe(choices => {
//   this.choices = choices;
//   this.form.controls.choices.patchValue(this.choices[0].getValue);
// });

// getOrders() {
//   return [
//     // {id: 100, name: 'True'},
//     // {id: 200, name: 'False'},
//     'true', 'false'
//   ];
// }
