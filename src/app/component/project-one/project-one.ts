import { Component, DestroyRef, inject, model, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { Projects } from '../../services/projects';
import { ActivatedRoute} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Photo {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
}

interface Project {
    id?: string;
    client?: string;
    budget?: string;
    startDate: string;
    endDate: string
}


@Component({
    selector: 'app-project-one',
    imports: [GalleriaModule, ButtonModule, TableModule, DividerModule, TagModule],
    templateUrl: './project-one.html',
    styleUrl: './project-one.scss',
})
export class ProjectOne implements OnInit {
    images: Photo[] = [];
    value: any;
    project:any
    projectId!: number

    projectservice = inject(Projects)
    route = inject(ActivatedRoute)
      destoryRef  = inject(DestroyRef)

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            showItemNavigators: true, // MUST BE TRUE
            showThumbnails: false,

        },
        {
            breakpoint: '768px',
            numVisible: 1,
            showItemNavigators: true, // MUST BE TRUE
            showThumbnails: true
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            showItemNavigators: false, // MUST BE TRUE
            showThumbnails: true
        }
    ];

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = Number(params['id']); // 'id' should match the route param name
        });
        // this.images = [
        //     {
        //         itemImageSrc: 'images/hero3.jpg',
        //         thumbnailImageSrc: 'images/hero3.jpg',
        //         alt: 'Minimalist living room with Espresso accents',
        //         title: 'The Modern Living Space'
        //     },
        //     {
        //         itemImageSrc: 'images/hero.jpg',
        //         thumbnailImageSrc: 'images/hero.jpg',
        //         alt: 'Eco-friendly kitchen in Forest Green',
        //         title: 'Sustainable Culinary Design'
        //     },
        //     {
        //         itemImageSrc: 'images/hero4.jpg',
        //         thumbnailImageSrc: 'images/hero4.jpg',
        //         alt: 'Smart home bedroom integration',
        //         title: 'Restful Automation'
        //     },
        //     {
        //         itemImageSrc: 'images/hero3.jpg',
        //         thumbnailImageSrc: 'images/hero3.jpg',
        //         alt: 'Minimalist living room with Espresso accents',
        //         title: 'The Modern Living Space'
        //     },
        //     {
        //         itemImageSrc: 'images/hero.jpg',
        //         thumbnailImageSrc: 'images/hero.jpg',
        //         alt: 'Eco-friendly kitchen in Forest Green',
        //         title: 'Sustainable Culinary Design'
        //     },
        //     {
        //         itemImageSrc: 'images/hero4.jpg',
        //         thumbnailImageSrc: 'images/hero4.jpg',
        //         alt: 'Smart home bedroom integration',
        //         title: 'Restful Automation'
        //     }
        // ];
        this.setValue();
        this.getProject()

    }



    setValue() {
        // this.project = [
        //     {
        //         id: '1001',
        //         client: 'Seshadripuram Educational Trust ',
        //         budget: '24.55 Crore',
        //         startDate: '2022',
        //         endDate: '2024',

        //     },


        // ]
    }



    getProject() {

       this.projectservice.getSelectedProject(this.projectId)
  .pipe(takeUntilDestroyed(this.destoryRef))
  .subscribe({
    next: (res: any) => {
      this.project = {
        ...res[0],
        ...res[0].projectOverview[0]
      };
      this.images = res[0].images
    },
    error: (err) => {
      console.error(err);
    }
  });
    }




}
