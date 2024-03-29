import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] | undefined;
  public url: string;

  constructor(private _projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    // @ts-ignore
    this._projectService.getProjects().subscribe(
      (response: { projects: any }) => {
        if (response.projects) {
          this.projects = response.projects;
        }
      },
      (error: any) => {
        console.log(<any>error);
      }
    );
  }
}
