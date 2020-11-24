/*
WD8 - This injectable class implements an Angular Web service client.
 The client retrieves all the questions for a given quiz ID.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
