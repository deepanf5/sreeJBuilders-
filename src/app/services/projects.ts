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
      projectName:'Construction of Seshadripuram College Building Veerasagara Layout At Tumkur',
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
      client:'KARNATAKA HOUSING BOARD',
      projectName:'BASE University Auditorium Block Interiors, AV and HVAC Works',
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
      client:'KARNATAKA HOUSING BOARD',
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
      client:'KARNATAKA HOUSING BOARD',
      projectName:'BASE University Academic & Library Block Interiors.',
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
      client:'SPORTS AUTHORITY OF INDIA',
      projectName:'HELP DESK CENTRE AND TOILETS BLOCK',
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
      client:'KARNATAKA HOUSING BOARD',
      projectName:'CONSTRUCTION OF FGC COLLEGE AT CHINTAMANI',
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
      client:'SAI, NSSE, BANGALORE',
      projectName:'PROPOSED INDOOR SPORTS ARENA (T.T) AT SAI, NSSE, BANGALORE',
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
      client:'SAI, NSSE, BANGALORE',
      projectName:'PROPOSED INDOOR SPORTS ARENA (T.T) AT SAI, NSSE, BANGALORE',
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
}
