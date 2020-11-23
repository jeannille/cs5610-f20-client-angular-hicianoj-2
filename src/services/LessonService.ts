import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
/* retrieves all the lessons for the selected module whose ID is mid*/
  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/modules/${moduleId}/lessons`)
      .then(response => response.json())


  // findTopicsForLesson = (lessonId)

  // find topics for lesson
  findTopicsforLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/lessons/${lessonId}/topics`)
      .then(response => response.json())
}
