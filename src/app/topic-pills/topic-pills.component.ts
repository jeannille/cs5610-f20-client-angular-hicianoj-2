import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/LessonService';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  topics = [];
  topicId;
  lessonId = '';
  moduleId = '';
  courseId = '';
  layout: '';

  constructor(
    private activeRoute: ActivatedRoute,
    private lessonService: LessonService
  ) {
  }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      this.topicId = params.tid;
      this.layout = params.layout;
      if (typeof this.lessonId !== 'undefined') {
        this.lessonService.findTopicsforLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });

  }
}
