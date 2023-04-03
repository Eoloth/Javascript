import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;

  constructor(private _projectService: ProjectService) {
    this.title = 'Crear projecto';
    this.project = new Project('', '', '', '', 2020, '', '');
  }

  ngOnInit() {}

  onSubmit(form: any) {
    console.log(this.project);
  }
}
