import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { AfterViewInit,Component, QueryList, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
   
   courses:Array<any> = COURSES;

   @ViewChildren(CourseCardComponent)
   cards: QueryList<CourseCardComponent>;

   startDate: Date = new Date(Date.now());

   welcome: String = 'welcome';

   price: number = 9.99;

   percent: number = 0.67;

   ngAfterViewInit() {
 

      this.cards.changes.subscribe(cards => console.log(cards));

   }

   addCourse() {
      this.courses.push({
         id: 11,
         description: "Angular Core Deep Dive 2",
         iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
         longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
         category: 'INTERMEDIATE',
         lessonsCount: 10
     },);
   }

   onCourseSelected(course:Course) {
      console.log('course selected --', course);
   }

}
