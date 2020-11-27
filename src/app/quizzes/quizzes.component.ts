import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../../services/quiz.service.client';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  // use a service to retrieve all the quizzes and bind them to a local quizzes array.
  constructor(private service: QuizzesServiceClient,
              private route: ActivatedRoute) {
  }

  courseId = ''
  quizzes = []
  layout = ''

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.layout = params.layout;
      console.log(params)
      /*
       use the question service to retrieve all the quesions for the current quiz
       and bind them to a local questions array
       */
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });
  }


}
