import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  projects: boolean = true;

  showProjects() {
    this.projects = true;
  }

  showResume() {
    this.projects = false;
  }
}
