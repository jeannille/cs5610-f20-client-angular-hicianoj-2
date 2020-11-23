import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/ModuleService';
import {CourseService} from '../../services/course-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
// component will display modules, listens to currently active route
// looks for courseId in route
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId = '';
  courseId = '';
  course = {}
  layout = ''

  // uses ActivatedRoute to listen to current path route
  constructor(
    private activeRoute: ActivatedRoute,
    private moduleService: ModuleService,
    private courseService: CourseService
  ) {
  }

  // ComponentMountUpdate
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.layout = params.layout;

      if (typeof this.courseId !== 'undefined') {
        //  fetch the modules for the course, which we've gotten from path
        this.moduleService.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);

        this.courseService.findCourseById(this.courseId)
          .then(course => this.course = course)
      }
    });
  }

}
