import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string | undefined;
  public success: string | undefined;

  constructor(private _projectService: ProjectService) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2020, '', '');
  }

  ngOnInit() {}

  onSubmit(form: any) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failed';
        }
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
