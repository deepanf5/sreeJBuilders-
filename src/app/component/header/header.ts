import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-header',
  imports: [ButtonModule,MenubarModule,AnimateOnScrollModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  
  items: MenuItem[] | undefined;
  
  ngOnInit(): void {
    this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Project 1',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Project 2',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'Project 3',
                        icon: 'pi pi-pencil'
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            },
             {
                label: 'privacy Policy',
                icon: 'pi pi-envelope'
            },
          ]
       
  }
}
