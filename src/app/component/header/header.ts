
import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import {Router, RouterLink} from '@angular/router'


@Component({
  selector: 'app-header',
  imports: [ButtonModule,MenubarModule,AnimateOnScrollModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  
  items: MenuItem[] | undefined;
  private route = inject(Router)
  
  ngOnInit(): void {
    this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                    command:() => {
                    this.route.navigate(['/home']);
                }
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'All projects',
                        icon: 'pi pi-bolt',
                        command:() => {
                    this.route.navigate(['/projects']);
                }
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
