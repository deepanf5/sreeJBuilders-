import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-mission',
  imports: [ ButtonModule,CardModule,ImageModule],
  templateUrl: './mission.html',
  styleUrl: './mission.scss',
})
export class Mission {

}
