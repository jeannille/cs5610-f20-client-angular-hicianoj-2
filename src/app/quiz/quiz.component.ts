import {Component, OnInit} from '@angular/core';
import {QuestionsServiceClient} from '../../services/question.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId = {};
  quiz = {
    title: '',
  };
  questions = [];
  finalGrade = false;
  result = {
    score: '',
    _id: '',
  }
  attempts = [];


  constructor(private svc: QuestionsServiceClient,
              private quizService: QuizzesServiceClient,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz)
      this.quizAttempts();
    })
  }

  // return the past quiz grades
  quizAttempts = () => {
    this.finalGrade = true;
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {}).then(response => response.json())
      .then(attempts => this.attempts = attempts)
      .then(attempts => console.log(attempts))
  }

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => this.result = result) // grades
      .then(result => console.log(result))
  }


}
