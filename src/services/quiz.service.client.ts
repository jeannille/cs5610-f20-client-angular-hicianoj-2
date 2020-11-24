/* WD8 - This injectable class implements an Angular Web service client.
The client retrieves all the quizzes as well as a quiz for a given ID.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}`)
      .then(response => response.json())
}
