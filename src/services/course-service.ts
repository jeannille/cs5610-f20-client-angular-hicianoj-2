// /* Class responsible with fetching courses from server*/

import {Injectable} from '@angular/core';




/*similar to autowire, inversion of control using injectable for CourseService to be "injectable"
able to inject into constructors of classes that will use CourseService  */
@Injectable()
export class CourseService {

  findAllCourses = () =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/hicianoj/courses`)
      .then(response => response.json());

// find by Course Id
//   findCourseById = (courseId) =>
//     fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/courses/${courseId}`)
//       .then(response => response.json());

  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/hicianoj/courses/${courseId}`)
      .then(response => response.json())

  deleteCourse = (id) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/hicianoj/courses/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());

  /* */
  createCourse = () =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/hicianoj/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());


  /* used by saveCourse, pass in course that is being editung */
  updateCourse = (course) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/hicianoj/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course), /* sringigy course object being passed*/
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
}
