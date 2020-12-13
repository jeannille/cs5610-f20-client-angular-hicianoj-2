import {Component, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  grading = false;
  faCheck = faCheck;
  faTimes = faTimes
  JSON;

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: ''}

  // WD 9
  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();
  grade = () => {
    this.grading = true;
  }

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
    this.grade();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
