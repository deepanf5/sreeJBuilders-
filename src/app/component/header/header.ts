
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
                    
                },
                 routerLinkActiveOptions: { exact: true } 
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
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope',
                     command:() => {
                    this.route.navigate(['/contact']);
                }
            },
             {
                label: 'privacy Policy',
                icon: 'pi pi-file'
            },
             {
                label: 'Our Team',
                icon: 'pi pi-users',
                      command:() => {
                    this.route.navigate(['/team']);
                }
            },
          ]
       
  }
}
