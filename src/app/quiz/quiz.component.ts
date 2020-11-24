import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../services/question.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId = ''


  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute) { }
  questions = []
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    })
  }


}
