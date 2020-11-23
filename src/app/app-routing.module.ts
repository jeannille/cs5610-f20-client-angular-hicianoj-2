import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';

// similar to routing in react, display certain components at certain routes
const routes: Routes = [
  {path: '', component: CourseNavigatorComponent},
  {path: ':layout/courses', component: CourseNavigatorComponent},
  // {path: 'courses/:cid/modules', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseNavigatorComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics/:tid', component: CourseNavigatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
