import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})


/* This component handles state variables  of courses, modules, lessons, topics */
export class CourseNavigatorComponent implements OnInit {
// no state variables required needed in angular, states change automatically
  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  selectedCourse = {
    title: ''
  }

  /* create course by calling createCourse from course-service, receive from server the actual course that will be added to array of
   courses to array (and display on browser)*/
  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course));

  /*recalcuting this.courses to keep all courses but the one w/ id of course passed*/

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))
//
  editCourse = (course) =>
    course.editing = true;

/* */
  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }
/*pass a reference to the course selected, assign to local variable, returns courses & its modules*/
  selectCourse = (course) => {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course._id)
      .then(modules => this.modules = modules);
  }
/*pass the course selected and render create a module for it*/
  createModuleForCourse = (selectedCourse) =>
    this.moduleService.createModuleForCourse(selectedCourse._id)
      .then(module => this.modules.push(module))
//
  deleteModule = (module) =>
    this.moduleService.deleteModules(module._id)
      .then(status => this.modules = this.modules.filter(m => m._id !== module._id))

  saveModule = (module) =>
    this.moduleService.updateModule(module)
      .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))

  /* component constructor can instantiate courseService(), via Injectable */
  constructor(private courseService: CourseService,
              private moduleService: ModuleService,
              private activatedRoute : ActivatedRoute
  ) {
  }
  /* ngOnInit - componentDidMount, lifecycle function*/
  ngOnInit(): void {

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

//
}
