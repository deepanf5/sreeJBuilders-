import { Component, inject, OnInit } from '@angular/core';
import { Projects } from '../../services/projects';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {IconFieldModule} from 'primeng/iconfield'
import {InputIconModule} from 'primeng/inputicon'
import {DataViewModule} from 'primeng/dataview'
import {TagModule} from 'primeng/tag'

@Component({
  selector: 'app-allprojects',
  imports: [
    CardModule,
    ButtonModule,     
    RippleModule,
    IconFieldModule,
  InputIconModule,
DataViewModule,
TagModule],
  templateUrl: './allprojects.html',
  styleUrl: './allprojects.scss',
})
export class Allprojects  implements OnInit {
  
  projectService = inject(Projects)
  projectList:any[] = []
  
  ngOnInit(): void {

    this.call()


  }


  call() {
     this.projectService.getPorjects().subscribe(
      {
        next:(res) => {
          this.projectList = res
        },
        error:(err) => {
          console.error(err)
        }
      }
    )
  }
}
