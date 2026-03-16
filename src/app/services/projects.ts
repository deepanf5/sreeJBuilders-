import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Projects {


  allProject = [

    {
      id:1,
      client:'Seshadripuram Educational Trust',
      projectName:'Construction Of Seshadripuram College Building Veerasagara Layout At Tumkur',
      location:'Bengaluru',
      iscompleted:true,
      projectOverview:[
        {
          cost:'24.55 core',
          startDate:'2022',
           duration:'2 year',
          endDate:'2024',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
    {
      id:2,
      client:'Karnataka Housing Board',
      projectName:'Base University Auditorium Block Interiors, AV and HVAC Works',
      location:'Bengaluru',
      iscompleted:true,
      projectOverview:[
        {
          cost:'24.55 core',
          startDate:'2024',
          endDate:'2025',
          duration:'12 month',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
    {
      id:3,
      client:'Karnataka Housing Board',
      projectName:'Construction of Karnataka Labour Institute Bagalugunte Bangalore.',
      location:'Bengaluru',
      iscompleted:true,
      projectOverview:[
        {
          cost:'11.60 Crore',
          startDate:'2017',
          endDate:'2018',
          duration:'11 Month',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
    {
      id:4,
      client:'Karnataka Housing Board',
      projectName:'base University Academic & Library Block Interiors.',
      location:'Bengaluru',
      iscompleted:true,
      projectOverview:[
        {
          cost:'7.80 Crore',
          startDate:'2021',
          endDate:'2022',
          duration:'1 year',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
    {
      id:5,
      client:'Sports Authority Of India',
      projectName:'Help Desk Centre And Toilets Block',
      location:'Bengaluru',
      iscompleted:true,
      projectOverview:[
        {
          cost:'0.54 Crore',
          startDate:'2024',
          endDate:'2025',
          duration:'5 Months',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
     {
      id:6,
      client:'Karnataka Housing Board',
      projectName:'Construction Of Fgc College At Chintamani',
      location:'Bengaluru',
      iscompleted:true,
      projectOverview:[
        {
          cost:'22.22 Crore',
          startDate:'2024',
          endDate:'2026',
          duration:'31 Months',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
     {
      id:7,
      client:'Sai, Nsse, Bangalore',
      projectName:'Proposed Indoor Sports Arena (T.T) At Sai, Nsse, Bangalore',
      location:'Bengaluru',
      iscompleted:false,
      projectOverview:[
        {
          cost:'9.94 Crores',
          startDate:'2026',
          endDate:'2026',
          duration:'10 Month',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    },
    {
      id:8,
      client:'Sai, Nsse, Bangalore',
      projectName:'Proposed Indoor Sports Arena (T.T) At Sai, Nsse, Bangalore',
      location:'Bengaluru',
      iscompleted:false,
      projectOverview:[
        {
          cost:'9.94 Crores',
          startDate:'2026',
          endDate:'2026',
          duration:'10 Month',
          EngineerNTeam:'M/s. SreeJ Builders LLP'
        }
      ]
    }
  ]
  


  getPorjects():Observable<any[]> {
    return of(this.allProject)
  }


  getSelectedProject(id:number) {
    let project = this.allProject.filter((project) => project.id === id)
    return of(project)
  }
}
