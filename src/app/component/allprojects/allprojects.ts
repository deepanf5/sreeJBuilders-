import { FormsModule } from '@angular/forms'
import { Component, inject, OnInit } from '@angular/core';
import { Projects } from '../../services/projects';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { DataViewModule } from 'primeng/dataview'
import { TagModule } from 'primeng/tag'
import { ProjectFiltersPipe } from '../../pipes/project-filters-pipe';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allprojects',
  imports: [
    CardModule,
    ButtonModule,
    RippleModule,
    IconFieldModule,
    InputIconModule,
    DataViewModule,
    FormsModule,
    TagModule,
    ProjectFiltersPipe,
    InputTextModule
  ],
  templateUrl: './allprojects.html',
  styleUrl: './allprojects.scss',
})
export class Allprojects implements OnInit {

  searchKey: string = '';
  projectService = inject(Projects);
  projectList: any[] = [];

  route = inject(Router)

  ngOnInit(): void {

    this.call()

  }


  call() {
    this.projectService.getPorjects().subscribe(
      {
        next: (res) => {
          this.projectList = res
        },
        error: (err) => {
          console.error(err)
        }
      }
    )
  }

  seeDetails() {
    this.route.navigate(['/project'])

  }
}
