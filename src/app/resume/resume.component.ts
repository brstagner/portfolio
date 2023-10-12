import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface ResumeNode {
  name: string;
  children?: ResumeNode[];
}

const TREE_DATA: ResumeNode[] = [
  {
    name: 'Software Skills',
    children: [
      {
        name: 'Languages',
        children: [{ name: 'Python' }, { name: 'HTML' }, { name: 'CSS' }],
      },
      {
        name: 'Frameworks',
        children: [
          { name: 'Flask' },
          { name: 'React' },
          { name: 'Angular' },
          { name: 'Express' },
        ],
      },
      {
        name: 'Other',
        children: [
          { name: 'Databases: PostgreSQL' },
          { name: 'Version Control: Git' },
          { name: 'Testing: pytest, Jest' },
        ],
      },
    ],
  },
  {
    name: 'Experience',
    children: [
      { name: 'Editor' },
      { name: 'Teaching' },
      { name: 'Technical Writer' },
    ],
  },
  {
    name: 'Education',
    children: [
      {
        name: 'Springboard /n Certification, Software Engineering | 2022 - 2023',
      },
      {
        name: 'Washington University in Saint Louis',
      },
      {
        name: 'Western Michigan University',
      },
      {
        name: 'The University of North Carolina at Chapel Hill',
      },
    ],
  },
];

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  treeControl = new NestedTreeControl<ResumeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<ResumeNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ResumeNode) =>
    !!node.children && node.children.length > 0;
}
