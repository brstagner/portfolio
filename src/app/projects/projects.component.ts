import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  isActive = false;

  cardDataArray: {
    image: string;
    name: string;
    description: string;
    tools: string;
    url: string;
    github: string;
  }[] = [
    {
      image: '../../assets/img/flower.png',
      name: 'Gardener',
      description: 'Node.js app for planning a flower garden',
      tools: 'React, Express, Postgres',
      url: 'https://gardenbloom.surge.sh/',
      github: 'https://github.com/brstagner/gardenerapp',
    },
    {
      image: '../../assets/img/campco.png',
      name: 'Campaign Coordinator',
      description: 'Flask app for coordinating tabletop rpgs',
      tools: 'Flask, Jinja, Postgres',
      url: '',
      github: '',
    },
  ];
}
