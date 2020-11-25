import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../services/question.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId = ''
  quiz;
  questions = []


  constructor(private svc: QuestionsServiceClient,
              private quizService :QuizzesServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz)
    })
  }


}
