import { Injectable } from '@angular/core';
import { CourseProvider } from '../_provides/course.provider';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

constructor(private courseProvider: CourseProvider) { }

createCourse(courseData) {
  return new Promise((resolve, reject) => {
    this.courseProvider.createCourse(courseData).subscribe(data => {
      resolve(data);
    });
  });
  }

  getAllCourses() {
    return new Promise((resolve, reject) => {
      this.courseProvider.getAllCourses().subscribe(data => {
        resolve(data);
      });
    });
  }

   getById(id) {
    return new Promise((resolve, reject) => {
      this.courseProvider.getById(id).subscribe(data => {
        resolve(data);
      });
    });
   }
   updateCourse(id, courseData) {
    return new Promise((resolve, reject) => {
      this.courseProvider.updateCourse(id, courseData).subscribe(data => {
        resolve(data);
      });
    });
  }

  deleteCourse(id) {
    return new Promise((resolve, reject) => {
      this.courseProvider.deleteCourse(id).subscribe(data => {
        resolve(data);
      });
    });
  }
 
  }



