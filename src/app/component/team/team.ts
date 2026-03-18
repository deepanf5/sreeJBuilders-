import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'app-team',
    imports: [OrganizationChartModule],
    templateUrl: './team.html',
    styleUrl: './team.scss',
})
export class Team implements OnInit {

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
                                label: 'Site Engineer',
                                type: 'person',
                                data: { name: 'Jagadeesh', avatar: 'mike.jpg' },
                                expanded: true,
                                children: [
                                    {
                                        label: 'Site Supervisor-1',
                                        type: 'person',
                                        expanded: true,
                                        data: { name: 'Ninga Reddy', avatar: 'mike.jpg' },
                                    },
                                    {
                                        label: 'Site Supervisor-2',
                                        type: 'person',
                                        expanded: true,
                                        data: { name: 'Mounish', avatar: 'mike.jpg' },
                                    },
                                    {
                                        label: 'Accountant',
                                        type: 'person',
                                        expanded: true,
                                        data: { name: 'Prabhavathi', avatar: 'mike.jpg' },
                                    },

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
                                data: { name: 'Surya', avatar: 'mike.jpg' },
                                expanded: true,
                                children: [
                                    {
                                        label: 'QS & Project co-ordinator',
                                        type: 'person',
                                        data: { name: 'Yogish Patil', avatar: 'mike.jpg' },
                                    },
                                    {
                                        label: 'Purchase Manager',
                                        type: 'person',
                                        data: { name: 'Shivraj Kumar', avatar: 'mike.jpg' },
                                    },
                                    {
                                        label: 'Senior site Supervisor',
                                        type: 'person',
                                        data: { name: 'Puttamallappa', avatar: 'mike.jpg' },
                                    },
                                    {
                                        label: 'Office Manager',
                                        type: 'person',
                                        expanded: true,
                                        data: { name: 'Banu Prakash', avatar: 'mike.jpg' },
                                    },
                                ]
                            }
                        ]
                    },

                ]
            }
        ];

    }
}
