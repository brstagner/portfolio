import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css'],
})
export class ProjectDialogComponent {
  image: string = 'default image data';
  background: string = 'default background data';
  name: string = 'default name data';
  description: string = 'default description data';
  tools: string = 'default tools data';
  url: string = 'default url data';
  github: string = 'default github data';

  closeDialog(): void {
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      image: string;
      background: string;
      name: string;
      description: string;
      tools: string;
      url: string;
      github: string;
    }
  ) {}

  // constructor(private dialogRef: MatDialogRef<ProjectDialogComponent>) {}
}
