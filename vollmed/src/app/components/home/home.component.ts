import { Component } from '@angular/core';
import { LayoutModule } from '../../modules/layout/layout.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { CardMenuComponent } from '../card-menu/card-menu.component';

@Component({
  selector: 'app-home',
  imports: [
    LayoutModule,
    SharedModule,
    CardMenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
