import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  // user input will be assigned to question vars
  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  grading = false
  faCheck = faCheck;
  faTimes = faTimes

  grade = () => {
    this.grading = true
  }


  constructor() {
  }

  ngOnInit(): void {

  }
}
