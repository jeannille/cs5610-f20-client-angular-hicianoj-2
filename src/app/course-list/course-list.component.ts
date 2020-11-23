import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';
// import {ActivatedRoute} from '@angular/router';

/*ts files hold the accompanying event handlers for the component*/


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
/*This component fetches all courses. It's at the top of our hierarcy of components to display courses */
export class CourseListComponent implements OnInit {
// get courseId from ActivatedRoute instance in constructor
  courses = [];
  courseId = '';
  course = {};
  layout = 'table'


  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    // on mount, courselist comp will listen for route params
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.cid;
      console.log(params)
      this.layout = params.layout;
      // if (typeof this.courseId !== 'undefined') {
      //   this.courseService.findCourseById(this.courseId)
      //     .then(returnedCourse => this.course = returnedCourse);
      // }
      this.courseService.findAllCourses()
        .then(courses => this.courses = courses);
      //
      this.courseService.findCourseById(this.courseId)
        .then(course => this.course = course);


      // console.log('testttt');
      // console.log(typeof (JSON.stringify(this.course)));
      // console.log((JSON.stringify(this.course)));
    });
  }

}
