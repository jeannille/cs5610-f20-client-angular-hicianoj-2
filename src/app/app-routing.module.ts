import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

// similar to routing in react, display certain components at certain routes
const routes: Routes = [
  {path: '', component: CourseNavigatorComponent},
  {path: ':layout/courses', component: CourseNavigatorComponent},
  // {path: 'courses/:cid/modules', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics/:tid', component: CourseNavigatorComponent},

  // WD8
  {path: ':layout/courses/:cid/quizzes', component: QuizzesComponent},
  { path: ':layout/courses/:courseId/quizzes/:quizId', component: QuizComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
