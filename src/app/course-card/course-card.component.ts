import { Course } from './../model/course';
import { Component, EventEmitter, Input,Output, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  noImageTemplate: TemplateRef<any>;

  @Input()
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    const beginner = this.course.category === 'BEGINNER';
    return {
       'beginner': beginner,
       'course-card': true
    }
  }

  cardStyles() {
    return {
      'text-decoration': 'underline'
    }
  }

  onCourseViewed() {
      this.courseSelected.emit(this.course);
  }

}
