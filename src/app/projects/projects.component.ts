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
    headerBgColor: string;
    headerTextColor: string;
    headerFont: string;
    name: string;
    description: string;
    tools: string;
    url: string;
    github: string;
  }[] = [
    {
      image: '../../assets/img/flower.png',
      headerBgColor: 'teal',
      headerTextColor: 'white',
      headerFont: 'Caprasimo',
      name: 'Gardener',
      description: 'Node.js app for planning a flower garden',
      tools: 'React, Express, Postgres',
      url: 'https://gardenbloom.surge.sh/',
      github: 'https://github.com/brstagner/gardenerapp',
    },
    {
      image: '../../assets/img/campco.png',
      headerBgColor: '#b13c1f',
      headerTextColor: 'white',
      headerFont: 'Red Hat Display',
      name: 'Campaign Coordinator',
      description: 'Flask app for coordinating tabletop rpgs',
      tools: 'Flask, Jinja, Postgres',
      url: 'http://campco.brstagner.com/',
      github: 'https://github.com/brstagner/campco',
    },
  ];
}
