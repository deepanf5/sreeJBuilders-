import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'app-team',
  imports: [OrganizationChartModule],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team implements OnInit{
  
  data: TreeNode[] = [];
  
  ngOnInit(): void {

    this.data = [
    {
        label: 'Managing Director',
        type: 'person',
        expanded: true,
        data: { name: 'Mr Murali Swamy', avatar: 'walter.jpg' },
        children: [
            {
                label: 'Project Manager',
                type: 'person',
                expanded: true,
                data: { name: 'Mr Satish GM', avatar: 'saul.jpg' },
                children: [
                    { 
                        label: 'Tax Manager', 
                        children: [
                            { label: 'Tax Specialist' },
                            { label: 'Junior Accountant' }
                        ] 
                    },
                    { 
                        label: 'Legal Counsel', 
                        children: [
                            { label: 'Paralegal' }
                        ] 
                    }
                ]
            },
            {
                label: 'Project Manager',
                type: 'person',
                expanded: true,
                data: { name: 'Mr vignesh', avatar: 'mike.jpg' },
                children: [
                    { 
                        label: 'Project Engineer', 
                        type: 'person',
                         data: { name: 'Mr Surya', avatar: 'mike.jpg' },
                        expanded: true,
                        children: [
                            { label: 'Logistics Lead' },
                            { label: 'Field Agent' },
                            { label: 'Security' },
                            { label: 'Warehouse Ops' }
                        ] 
                    }
                ]
            },

        ]
    }
];

  }
}
