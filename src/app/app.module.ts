import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/ModuleService';
import {ModuleListComponent} from './module-list/module-list.component';
import {CourseListComponent} from './course-list/course-list.component';
import {LessonService} from '../services/LessonService';

// import { WidgetListComponent } from './widget-list/widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    ModuleListComponent,
    CourseListComponent,
    // WidgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}