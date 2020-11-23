import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/LessonService';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})

export class LessonTabsComponent implements OnInit {

  lessons = [];
  lessonId = '';
  moduleId = '';
  courseId = ''
  layout: ''

  constructor(
    private activeRoute: ActivatedRoute,
    private lessonService: LessonService
  ) {
  }

  // listen for module id changing to generate its lessons
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.layout = params.layout;
      if (typeof this.moduleId !== 'undefined' && typeof this.courseId !== 'undefined') {
        //  fetch the modules for the course, which we've gotten from path
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

}
