import { Component, Input } from '@angular/core';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() image: string = 'default image data';
  @Input() headerBgColor: string = 'default header background color data';
  @Input() headerTextColor: string = 'default header text color data';
  @Input() headerFont: string = 'default header font data';
  @Input() name: string = 'default name data';
  @Input() description: string = 'default description data';
  @Input() tools: string = 'default tools data';
  @Input() url: string = 'default url data';
  @Input() github: string = 'default github data';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: {
        image: this.image,
        headerBgColor: this.headerBgColor,
        headerTextColor: this.headerTextColor,
        headerFont: this.headerFont,
        name: this.name,
        description: this.description,
        tools: this.tools,
        url: this.url,
        github: this.github,
      },
    });
  }
}
